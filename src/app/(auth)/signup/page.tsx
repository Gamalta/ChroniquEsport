'use client';
import {Button} from '@/components/ui/button';
import {Signup} from '@/lib/user';

export default function SignupPage() {
  return (
    <div>
      <h1>Signup</h1>
      <Button
        onClick={async () => {
          await Signup('Elio', 'elio.vital@ikomia.ai', '1234');
        }}
      >
        Signup
      </Button>
    </div>
  );
}
