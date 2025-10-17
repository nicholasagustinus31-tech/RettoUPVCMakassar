import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1 pt-24">{children}</main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default Layout;
