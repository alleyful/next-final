import type { Metadata } from 'next';

import '@/styles/globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

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
      <body>
        <ThemeProvider>
          <Navigation />
          <main className='main_container'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
