import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const SiteNav = (props) => {

  return (
    <div>
      <Navbar style = {{padding: '10px', backgroundColor: '#295D82', height: '50px', textAlign: 'left'}} fixed='top' bg-primary light expand="md">
        <NavbarBrand href="/"className="mr-auto" style={{fontFamily: 'sans-serif', color: 'white'}}>Music-Bass</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default SiteNav;