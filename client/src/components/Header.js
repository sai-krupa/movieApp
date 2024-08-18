import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import MovieLogo from '../app/assets/img/logo.png';
import UserLoginForm from '../features/user/UserLoginForm';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar className='navbar' sticky='top' expand='md'>
      <NavbarBrand className='ms-5' href='/'>
        <img className='float-start' src={MovieLogo} alt='movie logo' />
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse className='me-5' isOpen={menuOpen} navbar>
        <Nav className='ms-auto' navbar>
          <NavItem>
            <NavLink className='nav-link me-3' to='/' style={{ color: 'blue' }}>
              <i className='fa fa-film fa-lg' /> Popular Movies
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className='nav-link me-3'
              to='/watchMovies'
              style={{ color: 'blue' }}
            >
              <i className='fa fa-list fa-lg' /> Watch Movies
            </NavLink>
          </NavItem>
        </Nav>
        <UserLoginForm />
      </Collapse>
    </Navbar>
  );
};

export default Header;
