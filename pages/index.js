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
          <button onClick={() => signIn()}>Google Connect</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.name}
          <br />
          {session.user.image && (
            <img src={session.user.image} className='rounded-full' />
          )}
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
}
