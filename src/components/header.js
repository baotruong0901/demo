import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo192.png'
import './header.scss'

const Header=()=> {

    const menuData=[{
            path:'/',
            name:'Home'
        },
        {
            path:'users',
            name:'Users'
        },
        {
            path:'admin',
            name:'Admin'
        }
        ]

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/"><img className='logo' src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/admin" className='nav-link'>Admin</NavLink>
            <NavLink to="/users" className='nav-link'>Users</NavLink> */}
            {
                menuData.map((item)=>(
                    <NavLink to={item.path} className='nav-link'>
                        {item.name}
                    </NavLink>    
                ))
            }
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-3"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Header;