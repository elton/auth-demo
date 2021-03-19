import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='max-w-3xl mx-auto'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
