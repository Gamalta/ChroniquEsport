import '@/styles/globals.css';
import {Metadata} from 'next';
import {Providers} from './providers';
import clsx from 'clsx';
import {NavBar} from '@/components/NavBar';

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
          <NavBar />
          <div className="container mx-auto max-w-7xl py-16 px-6 flex-grow h-screen">
            <main className="max-w-xl3 h-full">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
