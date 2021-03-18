import '../styles/globals.css';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <div className='max-w-3xl mx-auto'>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
