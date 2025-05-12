import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans'; // Corrected import path
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/toaster';

const geistSans = GeistSans; // Removed instantiation as it's already the font object

export const metadata: Metadata = {
  title: 'AuthFlow',
  description: 'Web application with authentication and smooth transitions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          'h-full font-sans antialiased', // Use font-sans which maps to --font-geist-sans
          geistSans.variable // Use the variable property directly
        )}
      >
        <div className="flex min-h-full flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          {/* Add a simple footer if desired */}
          {/* <footer className="bg-secondary py-4 text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} AuthFlow
          </footer> */}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
