import { Jost } from "next/font/google";
import localFont from 'next/font/local'
import 'remixicon/fonts/remixicon.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../public/css/globals.css";
import "../public/css/cityPage.css";
import "../public/css/centerPage.css";
import "../public/css/override.css";


import "../public/css/style.css";
import "../public/css/responsive.css";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";


const segoeRegular = localFont({
  src: '../public/fonts/Segoe-UI.ttf',
  display: 'swap',
  variable : '--segoe-regular'
 
})


const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Smartworks - India's largest Managed Workspace Platform",
  description: "Smartworks provides fully managed and customized office space across 40+ locations in 14 cities. It is trusted by Fortune 500 and Forbes 2000 companies, as well as leading Indian and Global companies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={segoeRegular.className}>
      <body >
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
