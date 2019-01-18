import * as React from 'react';
import { Link } from 'react-router-dom';
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
    DropdownItem } from 'reactstrap';

class Header extends React.Component < any, any > {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        };
    }

    public toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }

    public render() {
        return (
            <div>
                <Navbar color="light" light={true} expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={() => this.toggle()} />
                    <Collapse isOpen={this.state.isOpen} navbar={true}>
                        <Nav className="ml-auto" navbar={true}>
                        <NavItem>
                            {/* <NavLink href="/components/">Components</NavLink> */}
                        </NavItem>
                        <NavItem>
                            {/* <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink> */}
                            <NavLink>
                                <Link to="/review">Review</Link>
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;