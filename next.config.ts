import type {NextConfig} from 'next';
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Download Google Drive icon to public directory synchronously if missing
try {
  const ICON_ID = '11PftqrVrqzER602AoZWUbAu12fzD95mc';
  const url = `https://lh3.googleusercontent.com/d/${ICON_ID}`;
  const publicDir = path.join(process.cwd(), 'public');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const faviconPath = path.join(publicDir, 'favicon.ico');
  const iconPngPath = path.join(publicDir, 'icon.png');

  const downloadFile = (fileUrl: string, destPath: string) => {
    const logPath = path.join(publicDir, 'download-log.txt');
    const appendLog = (msg: string) => {
      console.log(msg);
      try {
        fs.appendFileSync(logPath, `${new Date().toISOString()} - ${msg}\n`);
      } catch (err) {}
    };

    try {
      appendLog(`[Favicon Downloader] Downloading via curl to ${destPath}... URL: ${fileUrl}`);
      
      // Clear host cache or headers if needed; use curl with redirect options
      const cmd = `curl -s -L -f -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" -o "${destPath}" "${fileUrl}"`;
      execSync(cmd, { stdio: 'inherit' });
      
      if (fs.existsSync(destPath)) {
        const size = fs.statSync(destPath).size;
        appendLog(`[Favicon Downloader] File downloaded. Size: ${size} bytes`);
        if (size > 100) {
          // Read first 200 bytes to check if it's HTML
          const buffer = Buffer.alloc(200);
          const fd = fs.openSync(destPath, 'r');
          fs.readSync(fd, buffer, 0, 200, 0);
          fs.closeSync(fd);
          const headHex = buffer.toString('hex').substring(0, 16);
          const headText = buffer.toString('utf8');
          appendLog(`[Favicon Downloader] Hex header: ${headHex}`);
          if (headText.toLowerCase().includes('<!doctype html') || headText.toLowerCase().includes('<html') || headText.toLowerCase().includes('<script')) {
            appendLog(`[Favicon Downloader] Warning: Downloaded file is HTML (blocked by Google Sign-in screen), not an image!`);
            throw new Error('Downloaded file is HTML instead of image binary');
          } else {
            appendLog(`[Favicon Downloader] Success: Verified branding icon file is binary!`);
          }
        } else {
          appendLog(`[Favicon Downloader] Error: Downloaded file is too small (${size} bytes)`);
          throw new Error('Downloaded file is too small');
        }
      } else {
        appendLog(`[Favicon Downloader] Error: File does not exist after curl completion`);
        throw new Error('File does not exist');
      }
    } catch (e: any) {
      appendLog(`[Favicon Downloader] Error: Curl download failed or threw exception: ${e?.message || e}`);
      appendLog(`[Favicon Downloader] Creating solid high-contrast brand fallback PNG image...`);
      const orangePngBase64 = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAALklEQVRYR+3VwQkAMAgEQDtx/5XahSDIi9868MygIKv63gcYjwDGSIDxCGAcG6ZgQAAmO+z8AAAAAElFTkSuQmCC";
      try {
        fs.writeFileSync(destPath, Buffer.from(orangePngBase64, 'base64'));
        appendLog(`[Favicon Downloader] Fallback brand PNG successfully written to ${destPath}`);
      } catch (writeErr: any) {
        appendLog(`[Favicon Downloader] Critical fallback write failure: ${writeErr?.message}`);
      }
    }
  };

  const isValidImageFile = (filePath: string): boolean => {
    try {
      if (!fs.existsSync(filePath)) return false;
      const size = fs.statSync(filePath).size;
      if (size < 100) return false;
      const buffer = Buffer.alloc(200);
      const fd = fs.openSync(filePath, 'r');
      fs.readSync(fd, buffer, 0, 200, 0);
      fs.closeSync(fd);
      const headText = buffer.toString('utf8').toLowerCase();
      if (headText.includes('<!doctype html') || headText.includes('<html') || headText.includes('<script')) {
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  };

  // Check if we need to download/refresh the files
  const needsFavicon = !isValidImageFile(faviconPath);
  const needsIcon = !isValidImageFile(iconPngPath);

  if (needsFavicon || needsIcon) {
    if (needsFavicon) downloadFile(url, faviconPath);
    if (needsIcon) downloadFile(url, iconPngPath);
  }
} catch (error) {
  console.error('[Favicon Downloader] Execution failed:', error);
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
