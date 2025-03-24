import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/Providers';
import TopNav from '@/components/navbar/TopNav';

export const metadata: Metadata = {
  title: 'Enamorium',
  description:
    'Discover, favorite, and connect with people who share your passion for authentic relationships',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TopNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
