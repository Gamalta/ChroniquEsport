import {User} from '@prisma/client';

export default async function FloatingUserAction(props: {user: User}) {
  const {user} = props;

  return (
    <div className="fixed left-1/2 bottom-20 transform -translate-x-1/2 bg-content1">
      <p>{user.name}</p>
    </div>
  );
}
