import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className='text-3xl mb-3 font-semibold dark:text-gray-200'>
        NextAuth.js Example
      </h1>
      <p className='text-gray-700 dark:text-gray-300'>
        This is an example site to demonstrate how to use{' '}
        <a
          href={`https://next-auth.js.org`}
          className='text-lightBlue-600 underline'>
          NextAuth.js
        </a>{' '}
        for authentication.
      </p>
    </Layout>
  );
}
