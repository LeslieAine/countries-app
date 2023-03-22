import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className={styles.navbar}>
      <NavLink to="/" className={styles.link}>
        { location.pathname !== '/' && <IoChevronBack className={styles.back} /> }
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Navbar;
