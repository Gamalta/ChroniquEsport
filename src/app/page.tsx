import {getCurrentUser} from '@/lib/session';
import {Button} from '@nextui-org/button';
import Link from 'next/link';

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {user && <pre>{JSON.stringify(user)}</pre>}
      <Button href="api/auth/signin" as={Link}>
        signin
      </Button>
    </section>
  );
}
