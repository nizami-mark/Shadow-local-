import type {Metadata} from 'next';
import { Inter, Unbounded, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-display',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const siteConfig = {
  name: 'Shadow Studio',
  description: 'Scale your eCommerce brand from PKR 2M to 7M+ Monthly revenue in 90 days. Pakistan\'s leading performance marketing agency for high-growth brands.',
  url: 'https://shadowstudio.io', // Placeholder, can be updated later
  ogImage: 'https://drive.google.com/uc?export=download&id=1p78NgIMJDO-CY1s-ZWb-OyvdKcxdSHxM',
  keywords: [
    'eCommerce marketing pakistan',
    'performance marketing agency',
    'scale ecommerce brand',
    'meta ads agency pakistan',
    'google ads experts',
    'UGC content agency',
    'shopify scaling system'
  ]
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: 'Shadow Studio',
      url: siteConfig.url,
    },
  ],
  creator: 'Shadow Studio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@shadowstudio',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: 'https://lh3.googleusercontent.com/d/11PftqrVrqzER602AoZWUbAu12fzD95mc',
        type: 'image/png',
      },
      {
        url: 'https://lh3.googleusercontent.com/d/11PftqrVrqzER602AoZWUbAu12fzD95mc',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    shortcut: 'https://lh3.googleusercontent.com/d/11PftqrVrqzER602AoZWUbAu12fzD95mc',
    apple: [
      {
        url: 'https://lh3.googleusercontent.com/d/11PftqrVrqzER602AoZWUbAu12fzD95mc',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${unbounded.variable} ${playfair.variable} dark`}>
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MVB8PXS6');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="bg-[#3a3d44] text-[#f0ece4] antialiased selection:bg-[#f4703a]/30 selection:text-[#f4703a]">
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MVB8PXS6"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
