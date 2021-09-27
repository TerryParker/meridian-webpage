import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} className="text-warning" to="/">Meridian 59</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow font-weight-bold">
                <NavItem>
                  <NavLink tag={Link} className="text-warning" to="/armor">Armor </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-warning" to="/creature">Creatures</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-warning" to="/weapons">Weapons</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-warning" to="/schools">Schools</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-warning" to="/Npcs">Npcs</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
