import Link from 'next/link';
import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client';

const Header = () => {
  const [session, loading] = useSession();
  return (
    <>
      <Head>
        <title>Auth Demo</title>
      </Head>
      <header>
        <div className='mb-4'>
          <p className='relative top-0 overflow-hidden rounded-b-lg bg-gray-100 text-gray-700'>
            {!session && (
              <div className='h-14 flex justify-between items-center p-2'>
                <span className=''>You are not signed in.</span>
                <a
                  href={`/api/auth/sign`}
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                  className='bg-lightBlue-600 py-2 px-6 text-white rounded font-bold hover:shadow-inner'>
                  Sign in
                </a>
              </div>
            )}
            {session && (
              <div className='flex p-2 justify-between items-center'>
                <div className='flex items-center'>
                  {session.user.image && (
                    <img
                      src={session.user.image}
                      className='rounded-full h-11 w-11'
                    />
                  )}
                  <span className='ml-2'>
                    <small>Signed in as</small>
                    <br />
                    <strong>{session.user.email || session.user.name}</strong>
                  </span>
                </div>

                <a
                  href={`/api/auth/signout`}
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                  className='underline font-medium'>
                  Sign out
                </a>
              </div>
            )}
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
