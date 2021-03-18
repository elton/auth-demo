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
        <div className='w-2/3 mx-auto my-5 flex-col items-center'>
          <div>Signed in as {session.user.name}</div>

          {session.user.image && (
            <div>
              <img src={session.user.image} className='rounded-full' />
            </div>
          )}
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </>
  );
}
