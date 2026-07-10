import Navbar from '../layouts/Navbar';
import Sidebar from '../layouts/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
