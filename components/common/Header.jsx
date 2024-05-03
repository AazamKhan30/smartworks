"use client"
import {useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { MdOutlineSearch } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image';

export const navItems = [
  {
    label: "Explore Locations",
    url: "#",
    children: [
        {
          label: "Delhi-NCR",
          link: "delhi-ncr/",
      
        },
        {
          label: "Bangalore",
          link: "bangalore",
       
        },
  
        {
          label: "Mumbai",
          link: "mumbai",
   
        },
        {
          label: "Pune",
          link: "pune",
  
        },
        {
            label: "Chennai",
            link: "chennai",
    
        },
        {
            label: "Hyderabad",
            link: "hyderabad",
    
        },
        {
            label: "Kolkata",
            link: "kolkata",
    
        },
        {
            label: "Jaipur",
            link: "jaipur",
    
        },
        {
            label: "Indore",
            link: "indore",
    
        },
        {
            label: "Ahmedabad",
            link: "ahmedabad",
    
        },

        {
            label: "Kochi",
            link: "kochi",
    
        },

        {
            label: "Noida",
            link: "noida",
    
        },

        {
            label: "Dehi",
            link: "delhi",
    
        },

        
        {
            label: "Gurgaon",
            link: "gurgaon",
    
        },
      ]
  },
  {
    label: "Enterprise",
    url: "#",
  },
  {
    label: "Resources",
    url: "#",
    children: [
      {
        label: "Blog",
        link: "#",
    
      },
      {
        label: "Newsroom",
        link: "#",
     
      },

      {
        label: "Insights",
        link: "#",
 
      },
      {
        label: "Careers",
        link: "#",

      },
    ],
  },
  {
    label: "About",
    url: "#",
  },
  {
    label: "Contact",
    url: "#",
  },
];


const Header = () => {

  const [scrolled, setScrolled ] = useState(false)

 const scrollHeader = ()=>{

  if(window.scrollY > 100){
    setScrolled(true);
   
  }
  else{
    setScrolled(false)
  }
};
useEffect(()=>{
  window.addEventListener('scroll', scrollHeader)


}, [])

  return (
    <Navbar expand="lg" className={scrolled? 'myNav sticky': 'myNav'} id="navbar">
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
        <div className='ms-lg-4 d-flex d-md-none align-items-center gap-3 others'><div className='searchIcon'><MdOutlineSearch /></div> <Link href="#" className='siteBtn navBtn'>Get Started</Link>   <Navbar.Toggle aria-controls="basic-navbar-nav" /></div>
     
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center d-flex">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                {!item.children && (
                 
                  <Link href={item.url} className="nav-link">
                    {item.label}
                  </Link>
                )}
                {item.children &&  (
                  
                  <NavDropdown renderMenuOnMount={true}
                    title={item.label}
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

            <div className='ms-lg-4 d-none d-md-flex align-items-center gap-3 '><div className='searchIcon'><MdOutlineSearch /></div> <Link href="#" className='siteBtn navBtn'>Get Started</Link></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header