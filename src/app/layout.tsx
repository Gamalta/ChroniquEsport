import '@/styles/globals.css';
import {Metadata} from 'next';
import {Providers} from './providers';
import clsx from 'clsx';
import {NavBar} from '@/components/NavBar';
import {getNavigationItems} from '@/lib/navigation';

export const metadata: Metadata = {
  //do something
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationItems = await getNavigationItems();
  return (
    <html lang="en">
      <head />
      <body
        className={clsx('min-h-screen bg-background font-sans antialiased')}
      >
        <Providers themeProps={{attribute: 'class', defaultTheme: 'dark'}}>
          <div className="relative flex min-h-screen flex-col">
            <NavBar navigationItems={navigationItems} />
            <main className="max-w-xl3 h-full">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
