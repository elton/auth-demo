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
      <header className='max-w-3xl mx-auto'>
        <div className='mb-4'>
          <div className='relative top-0 overflow-hidden rounded-b-lg bg-gray-200 dark:bg-gray-600 dark:text-gray-300'>
            {!session && (
              <div className='h-14 flex justify-between items-center p-2'>
                <span className=''>You are not signed in.</span>
                <a
                  href={`/api/auth/sign`}
                  onClick={(e) => {
                    e.preventDefault();
                    signIn('google');
                  }}
                  className='bg-lightBlue-600 dark:bg-lightBlue-900 py-2 px-6 text-white dark:text-gray-300 rounded font-bold hover:shadow-inner'>
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
                      className='rounded-full h-11 w-11 border-gray-50 border-4'
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
          </div>
        </div>
      </header>
      <nav className='max-w-3xl mx-auto dark:text-gray-300'>
        <ul className='mb-8 flex'>
          <li className='mr-4'>
            <Link href='/'>
              <a className='underline hover:text-lightBlue-800'>Home</a>
            </Link>
          </li>
          <li className='mr-4'>
            <Link href='/protected'>
              <a className='underline hover:text-lightBlue-800'>Protected</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
