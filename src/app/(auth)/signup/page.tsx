'use client';
import {Signup} from '@/lib/user';
import {Button} from '@nextui-org/button';

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
