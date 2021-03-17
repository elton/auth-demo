import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();
  return (
    <>
      <Head>
        <title>Auth Demo</title>
      </Head>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.name}
          <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
}
