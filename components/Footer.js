const Footer = () => {
  return (
    <footer className='border-t border-gray-300 p-2 mt-8'>
      <p className='text-gray-500 text-xs text-center'>
        Copyright &copy; {new Date().getFullYear()} Elton Zheng
      </p>
    </footer>
  );
};

export default Footer;
