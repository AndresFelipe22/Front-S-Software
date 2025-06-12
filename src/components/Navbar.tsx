import React from 'react';
import { useLocation } from 'react-router-dom';

const AdminNavbar = () => (
  <nav>
    {/* Navbar especial para admin */}
    <span>Panel de Administración</span>
    {/* ...otros elementos... */}
  </nav>
);

const SellerNavbar = () => (
  <nav>
    {/* Navbar especial para seller */}
    <span>Panel de Vendedor</span>
    {/* ...otros elementos... */}
  </nav>
);

const Navbar = () => {
  const location = useLocation();

  if (location.pathname.startsWith('/admin')) {
    return <AdminNavbar />;
  }
  if (location.pathname.startsWith('/seller')) {
    return <SellerNavbar />;
  }

  // ...navbar normal...
  return (
    <nav>
      {/* Navbar general */}
      <span>Navbar General</span>
      {/* ...otros elementos... */}
    </nav>
  );
};

export default Navbar;