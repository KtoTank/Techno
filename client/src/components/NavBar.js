import React, {useContext} from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import {Button} from "react-bootstrap";


function NavBar() {
  const {user} = useContext(Context)
    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink style={{color:'white', textDecoration:'none'}} to={SHOP_ROUTE}>Techno</NavLink>
          <Nav className="ml-auto" style={{color:'white'}}>
            <Button variant={"outline-light"}>Авторизация</Button>
            <Button variant={"outline-light"}>Админ панель</Button>
            <Button></Button>
          </Nav>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;