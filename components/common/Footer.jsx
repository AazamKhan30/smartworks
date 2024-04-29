
import Link from "next/link"
import { FaLocationDot, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube} from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
export const footerInfo = [
  {
    id: 1,
    infoIcon: <FaLocationDot />,
    infoLabel: "Golf View Corporate Tower, Sector 42,Gurugram, Haryana 122002",
    infoLink: "#",
  },
  {
    id: 2,
    infoIcon: <IoCall />,
    infoLabel: "+91 981-117-5951",
    infoLink: "#",
  },

  {
    id: 3,
    infoIcon: <FaEnvelope />,
    infoLabel: "enquiry@sworks.co.in",
    infoLink: "#",
  },
];

export const socialMedia = [
  {
    icon: <FaFacebookF />,
    alt: "facebook logo",
    iconUrl: "#"
  },
  {
    icon: <FaTwitter />,
    alt: "Twitter logo",
    iconUrl: "#",
  },
  {
    icon: <FaInstagram />,
    alt: "Instagram logo",
    iconUrl: "#",
  },
  {
    icon: <FaYoutube />,
    alt: "Youtube logo",
    iconUrl: "#",
  
  },
  {
    icon: <FaLinkedinIn />,
    alt: "Linkedin logo",
    iconUrl: "#",
  },
  ];



 export const locations = [
  {
    title: "Locations in India",
    menus: [
        { id:1,  name: "Managed Office Space in Bangalore", link: "#" },
        { id:2,  name: "Managed Office Space in Chennai", link: "#" },
        { id:3,  name: "Managed Office Space in Delhi-NCR", link: "#" },
        { id:4,  name: "Managed Office Space in Hyderabad", link: "#" },
        { id:5,  name: "Managed Office Space in Indore", link: "#" },
        { id:6,  name: "Managed Office Space in Jaipur", link: "#" },
        { id:7,  name: "Managed Office Space in Kolkata", link: "#" },
        { id:8,  name: "Managed Office Space in Mumbai", link: "#" },
        { id:9,  name: "Managed Office Space in Pune", link: "#" },
        { id:10, name: "Managed Office Space in Ahmedabad", link: "#" },
        { id:11, name: "Managed Office Space in Kochi", link: "#" },
    ],
    
},

{
  title: "Locations in Singapore",
  menus: [
      { name: "", link: "#" },
      { name: "", link: "#" },
      { name: "", link: "#" },
      
  ],
  
},
 ];

export const quickLinks = [
  {
      title: "Quick Links",
      menus: [
          { name: "Brand Partnerships", link: "#" },
          { name: "Managed Office Space", link: "#" },
          { name: "Blog", link: "#" },
          { name: "FAQs", link: "#" },
          { name: "Newsroom", link: "#" },
          { name: "Careers", link: "#" },
          { name: "Information Security Policy", link: "#" },
          { name: "Code and Ethics", link: "#" },
          { name: "Technology", link: "#" },
          { name: "Privacy Policy", link: "#" },
          { name: "Terms & Conditions", link: "#" },
         
      ],
  },

];



const Footer = () => {
  return (
    <section className="footer py100 bgBlack text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footerCol">
              <div className="footerLogo">
                <Link className="footerLogo" href="/">
                  SmartWorks
                </Link>
              </div>
              <ul className="ps-0">
                {footerInfo &&
                  footerInfo.map((item, index) => (
                    <li key={index} className="infoList">
                      <span className="infoIcon">{item.infoIcon}</span>
                      <Link className="infoText" href={item.infoLink}>
                        {item.infoLabel}
                      </Link>
                    </li>
                  ))}
              </ul>
              <div className="social pt-4">
                <h4>Follow Us</h4>
                <ul className="socialLinks">
                  {socialMedia &&
                    socialMedia.map((item, index) => (
                      <li key={index}>
                        <Link href={item.iconUrl} alt={item.alt}>
                          {item.icon}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {locations &&
              locations.map((location) => (
                <div className="footerCol" key={location.title}>
                  <h4 className="footerTitle mb-3">{location.title}</h4>
                  <ul className="footerLinks ps-0">
                    {location.menus &&
                      location.menus.map((menu) => (
                        <li key={menu.id}>
                          <Link href={menu.link}>{menu.name}</Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>

          <div className="col-md-4 ">
            {quickLinks &&
              quickLinks.map((link) => (
                <div className="footerCol ps-md-5 ms-md-3" key={link.title}>
                  <h4 className="footerTitle mb-3">{link.title}</h4>
                  <ul className="footerLinks ps-0">
                    {link.menus &&
                      link.menus.map((menu) => (
                        <li key={menu.name}>
                          <Link href={menu.link}>{menu.name}</Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer