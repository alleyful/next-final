import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NYT Bestsellers',
  description: 'New York Times Bestsellers List'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main className='container'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
