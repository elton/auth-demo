import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';
import Layout from '../components/Layout';
const Protected = () => {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('api/examples/protected');
      const data = res.json();
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
        <div>Access Denied!!</div>
      </Layout>
    );
  }

  // If session exists, display content
  return (
    <Layout>
      <h1>Protected Page</h1>
      <p>
        <strong>{content || '\u00a0'}</strong>
      </p>
    </Layout>
  );
};

export default Protected;
