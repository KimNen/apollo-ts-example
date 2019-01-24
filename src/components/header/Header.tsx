import * as React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
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
import './Header.css';

class Header extends React.Component < any, any > {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            isScrolled : false,
        };
    }

    public componentDidMount () {
        window.addEventListener('scroll', this.handleScroll);
    }

    public componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
    }

    public handleScroll = (e) => {
        if (window.scrollY > 0) {
            if (this.state.isScrolled === false) {
                this.setState({ isScrolled: true });
            }
        } else if (this.state.isScrolled) {
            this.setState({ isScrolled: false });
        }
    }

    public toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }

    public render() {
        return (
            <div className={
                classnames({
                    'Header' : true,
                    'fixed' : this.state.isScrolled
                })}>
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
                                <Link to="/hero">Hero</Link>
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                                Character
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/human">Human</Link>
                            </DropdownItem>
                            <DropdownItem>
                                Friends
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