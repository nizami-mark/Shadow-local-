import type {NextConfig} from 'next';
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Download Google Drive icon to public directory synchronously if missing
try {
  const ICON_ID = '1V5uJ2GvVmJtuUMy9EKsfMpo1sUK2s5jY';
  const url = `https://lh3.googleusercontent.com/d/${ICON_ID}`;
  const publicDir = path.join(process.cwd(), 'public');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const faviconPath = path.join(publicDir, 'favicon.ico');
  const iconPngPath = path.join(publicDir, 'icon.png');

  const downloadFile = (fileUrl: string, destPath: string) => {
    try {
      console.log(`[Favicon Downloader] Downloading via curl to ${destPath}...`);
      execSync(`curl -s -L -A "Mozilla/5.0" -o "${destPath}" "${fileUrl}"`, { stdio: 'inherit' });
      
      // Verify file size to see if it actually downloaded correctly (not a tiny error page)
      if (fs.existsSync(destPath) && fs.statSync(destPath).size > 1000) {
        console.log(`[Favicon Downloader] Successfully downloaded: ${destPath}`);
      } else {
        throw new Error('Downloaded file is too small or nonexistent');
      }
    } catch (e) {
      console.warn(`[Favicon Downloader] Curl download failed for ${destPath}, copying fallback...`);
      const fallbackSource = path.join(publicDir, 'nizami-dp.png');
      if (fs.existsSync(fallbackSource)) {
        fs.copyFileSync(fallbackSource, destPath);
        console.log(`[Favicon Downloader] Fallback copied to ${destPath}`);
      }
    }
  };

  // Check if we need to download/refresh the files
  const needsFavicon = !fs.existsSync(faviconPath) || fs.statSync(faviconPath).size < 1000;
  const needsIcon = !fs.existsSync(iconPngPath) || fs.statSync(iconPngPath).size < 1000;

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
