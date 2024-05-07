"use client"
import {useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { MdOutlineSearch } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";

export const navItems = [

  {
     id:1,
    label: "Explore Locations",
    url: "#",
    children: [
        {
          id: 1-1,
          label: "Delhi-NCR",
          link: "delhi-ncr/",
      
        },
        {
          id: 1-2,
          label: "Bangalore",
          link: "bangalore",
       
        },
  
        {
          id: 1-3,
          label: "Mumbai",
          link: "mumbai",
   
        },
        {
          id: 1-4,
          label: "Pune",
          link: "pune",
  
        },
        {  
            id: 1-5,
            label: "Chennai",
            link: "chennai",
    
        },
        {  
            id: 1-6,
            label: "Hyderabad",
            link: "hyderabad",
    
        },
        {   
            id: 1-7,
            label: "Kolkata",
            link: "kolkata",
    
        },
        {   id: 1-8,
            label: "Jaipur",
            link: "jaipur",
    
        },
        {  id: 1-10,
            label: "Indore",
            link: "indore",
    
        },
        {   id: 1-11,
            label: "Ahmedabad",
            link: "ahmedabad",
    
        },

        {  id: 1-12,
            label: "Kochi",
            link: "kochi",
    
        },

        {  id: 1-14,
            label: "Noida",
            link: "noida",
    
        },

        {   id: 1-12,
            label: "Dehi",
            link: "delhi",
    
        },

        
        {   id: 1-13,
            label: "Gurgaon",
            link: "gurgaon",
    
        },
      ]
  },
  {
    id:2,
    label: "Enterprise",
    url: "/enterprise",
  },
  {
    id:3,
    label: "Resources",
    url: "#",
    children: [
      {
        id:3-1,
        label: "Blog",
        link: "/blog",
    
      },
      { 
        id:3-2,
        label: "Newsroom",
        link: "/newsroom",
     
      },

      {
        id:3-3,
        label: "Insights",
        link: "/insights",
 
      },
      {
        id:3-4,
        label: "Careers",
        link: "/careers",

      },
    ],
  },
  {
    id:4,
    label: "About",
    url: "/about",
  },
  {
    id:5,
    label: "Contact",
    url: "/contact",
  },
];


const Header = () => {
  const pathname = usePathname();
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
    <Navbar collapseOnSelect
    expand="lg" 
      className={scrolled ? "myNav sticky" : "myNav"}
      id="navbar"
    >
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
        <div className="ms-lg-4 d-flex d-md-none align-items-center gap-3 others">
          <div className="searchIcon">
            <MdOutlineSearch />
          </div>{" "}
          <Link href="#" className="siteBtn navBtn">
            Get Started
          </Link>{" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center d-flex">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                {!item.children && (
                  <Nav.Link as={Link}
                
                    href={item.url}
                    className={`${
                      pathname === item.url ? "active nav-link" : "nav-link"
                    }`}
               
                  >
                    {item.label}
                  </Nav.Link>
                )}
                {item.children && (
                  <NavDropdown
                    renderMenuOnMount={true}
                    title={item.label}
                    id="basic-nav-dropdown"
                  >
                    {item.label === "Explore Locations" &&
                      item.children.map((ch, i) => (
                        <Nav.Link as={Link}
                       
                          href={"/office-space/" + ch.link}
                          className={`${
                            pathname === "/office-space/" + ch.link 
                              ? "active dropdown-item"
                              : "dropdown-item"
                          }`}
                          key={i}
                          
                        >
                          {ch.label}
                        </Nav.Link>
                      ))}

                    {item.label === "Resources" &&
                      item.children.map((ch, i) => (
                        <Nav.Link as={Link}
              
                          href={ch.link}
                          className={`${
                            pathname === ch.link
                              ? "active dropdown-item"
                              : "dropdown-item"
                          }`}
                          key={ch.id}
                        >
                          {ch.label}
                        </Nav.Link>
                      ))}
                  </NavDropdown>
                )}
              </li>
            ))}
            <div className="ms-lg-4 d-none d-md-flex align-items-center gap-3 ">
              <div className="searchIcon">
                <MdOutlineSearch />
              </div>{" "}
              <Link href="#" className="siteBtn navBtn">
                Get Started
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header