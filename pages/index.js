import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className='text-3xl mb-3 font-semibold'>NextAUth.js Example</h1>
      <p className='text-gray-700'>
        This is an example site to demonstrate how to use{' '}
        <a href={`https://next-auth.js.org`}>NextAuth.js</a> for authentication.
      </p>
    </Layout>
  );
}
