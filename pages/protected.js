import { useState, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/client';
import Layout from '../components/Layout';
const Protected = () => {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('api/examples/protected');
      const data = await res.json();
      if (data.content) {
        setContent(data.content);
      }
    };
    fetchData();
  }, [session]);
  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <h1 className='text-3xl font-semibold mb-5'>Access Denied!!</h1>
        <p>{content}</p>
        <a
          href='/api/auth/signin'
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
          className='underline'>
          Signed in now.
        </a>
      </Layout>
    );
  }

  // If session exists, display content
  return (
    <Layout>
      <h1 className='text-3xl font-semibold mb-5'>Protected Page</h1>
      <p>{content || '\u00a0'}</p>
    </Layout>
  );
};

export default Protected;
