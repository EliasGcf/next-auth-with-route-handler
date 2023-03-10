import { getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function Home() {
  const session = await getServerSession();

  const isAuthenticated = !!session;

  return (
    <div>
      <h1>Home</h1>

      {isAuthenticated ? (
        <div>
          <p>Authenticated</p>
          <Link href="/api/auth/signout">SignOut</Link>
        </div>
      ) : (
        <div>
          <p>Not Authenticated</p>
          <Link href="/api/auth/signin/github">SignIn</Link>
        </div>
      )}
    </div>
  );
}
