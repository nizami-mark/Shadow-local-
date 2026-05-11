import type {Metadata} from 'next';
import { Inter, Unbounded } from 'next/font/google';
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

export const metadata: Metadata = {
  title: 'Shadow Studio | Marketing Agency for eCommerce',
  description: 'Scale your ecommerce brand from 2M to 7M+ in 90 days.',
  icons: {
    icon: 'https://drive.google.com/uc?export=download&id=11PftqrVrqzER602AoZWUbAu12fzD95mc',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${unbounded.variable} dark`}>
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4422520057993278');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="bg-[#3a3d44] text-[#f0ece4] antialiased selection:bg-[#f4703a]/30 selection:text-[#f4703a]">
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=4422520057993278&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
