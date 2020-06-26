import * as React from 'react';
import { useState } from 'react'
import VehicleDataService from '../../apiservices/VehicleApi';
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
    DropdownItem
  } from 'reactstrap';
  import {Link} from 'react-router-dom';

  const TopNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    const vehicleDropdownItems = VehicleDataService();

    const VehicleSelections = vehicleDropdownItems.map((item)=> {
      return <DropdownItem key={item.detailKey}>
        <Link to={{pathname: "/detail/" + item.detailKey}}>
          {item.model}
        </Link>
      </DropdownItem>
    });
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Demo Project</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                Flying Cars
                </DropdownToggle>
                <DropdownMenu right>
                  {VehicleSelections}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href='/enquiryform'>Enquiry Form</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/find-a-dealer'>Find a Dealer</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default TopNavbar;