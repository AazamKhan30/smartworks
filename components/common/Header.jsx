"use client"
import {useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { MdOutlineSearch } from "react-icons/md";
import { navItems } from '@/content';
import Link from 'next/link';
import Image from 'next/image';


const Header = () => {

  const [scrolled, setScrolled]= useState(false)

const scrollHeader = ()=>{

  if(window.scrollY > 100){
    setScrolled(true);
   
  }
  else{
    setScrolled(false)
  }
};
useEffect(()=>{
  window.addEventListener("scroll", scrollHeader)
 

}, [])

  return (
    <Navbar expand="lg" className={scrolled ? 'myNav sticky' : 'myNav'} >
      <Container>
        <Link href="../" className="navbar-brand">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={200}
            height={24}
            priority
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center d-flex">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                {!item.children && (
                  <Link href={item.url} className="nav-link">
                    {item.label}
                  </Link>
                )}
                {item.children && (
                  <NavDropdown renderMenuOnMount={true}
                    title="Explore Locations"
                    id="basic-nav-dropdown"
                  >
                    {item.children.map((ch, i) => (
                      <Link
                        href={"/office-space/" + ch.link}
                        className="dropdown-item"
                        key={i}
                      >
                        {ch.label}
                      </Link>
                    ))}
                  </NavDropdown>
                )}
              </li>
            ))}

            <div className='ms-lg-4 d-flex align-items-center gap-3'><div className='searchIcon'><MdOutlineSearch /></div> <Link href="#" className='siteBtn navBtn'>Get Started</Link></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header