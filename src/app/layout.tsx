import '@/styles/globals.css';
import {Metadata} from 'next';
import {Providers} from './providers';
import clsx from 'clsx';

export const metadata: Metadata = {
  //do something
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head />
      <body
        className={clsx('min-h-screen bg-background font-sans antialiased')}
      >
        <Providers themeProps={{attribute: 'class', defaultTheme: 'dark'}}>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
