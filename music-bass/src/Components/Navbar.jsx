import React from 'react';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';
const SiteNav = (props) => {
    return (
    <div>
    <Navbar style = {{padding: '30px', backgroundColor: '#295D82', height: '50px', textAlign: 'left'}} fixed='top' bg-primary light expand="md">
        <NavbarBrand href="/"className="nav" style={{fontFamily: 'sans-serif', color: 'white'}}><b>Music Base</b></NavbarBrand>
    </Navbar>
    </div>
    );
}
export default SiteNav;