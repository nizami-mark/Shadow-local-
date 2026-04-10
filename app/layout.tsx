import type {Metadata} from 'next';
import { Inter, Unbounded } from 'next/font/google';
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
  description: 'Scale your ecommerce brand from 3M to 7M+ in 90 days.',
  icons: {
    icon: 'https://drive.google.com/uc?export=download&id=11PftqrVrqzER602AoZWUbAu12fzD95mc',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${unbounded.variable} dark`}>
      <body suppressHydrationWarning className="bg-[#3a3d44] text-[#f0ece4] antialiased selection:bg-[#f4703a]/30 selection:text-[#f4703a]">
        {children}
      </body>
    </html>
  );
}
