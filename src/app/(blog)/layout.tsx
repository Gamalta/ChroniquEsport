import FloatingUserAction from '@/components/FloatingUserAction';
import {getCurrentUser} from '@/lib/user';
import '@/styles/globals.css';
import {Metadata} from 'next';

export const metadata: Metadata = {
  //do something
};

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <>
      {children}
      {user && <FloatingUserAction user={user} />}
    </>
  );
}
