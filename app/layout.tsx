import './globals.css';
import type { Metadata } from 'next';
import { inter, playfair } from '@/lib/fonts';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Henika group - Premium Export Products',
  description: 'Premium exporter of spices, fruits, vegetables, and raffia products to global markets',
  keywords: 'export, spices, fruits, vegetables, raffia, global trade, premium products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-slate-50 text-slate-800`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}