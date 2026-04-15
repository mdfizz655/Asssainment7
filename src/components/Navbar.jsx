
import { NavLink, Link } from 'react-router-dom'; 


  import { Home, Clock, BarChart3 } from 'lucide-react';





const Navbar = () => {
  const linkStyle = ({ isActive }) => 
    `flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all ${isActive ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-100'}`;
    




  return (
    <nav className="flex justify-between items-center px-16 py-4 bg-white sticky top-0 z-50 shadow-sm">
      
 

      <Link to="/">


        <img src="https://i.ibb.co.com/WpBM5G44/logo.png" alt="KeenKeeper Logo" className="h-8 w-auto object-contain" />


              </Link>







      <div className="flex gap-2">


        <NavLink to="/" className={linkStyle}><Home size={16}/> Home</NavLink>

               <NavLink to="/timeline" className={linkStyle}><Clock size={16}/> Timeline</NavLink>

        <NavLink to="/stats" className={linkStyle}><BarChart3 size={16}/> Stats</NavLink>


      </div>

    </nav>
  );
};









export default Navbar;