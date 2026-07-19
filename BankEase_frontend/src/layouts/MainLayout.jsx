import Navbar from '../layouts/Navbar';
import Sidebar from '../layouts/Sidebar';

const MainLayout = ({ children, setIsAuthenticated }) => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar setIsAuthenticated={setIsAuthenticated}/>

      <div className="flex">
        <Sidebar setIsAuthenticated={setIsAuthenticated} />

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
