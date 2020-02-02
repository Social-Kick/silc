import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Head from '../utils/head'
import Header from './header';
import Footer from './footer';
import layoutStyles from '../styles/components/layout.module.scss';
import '../styles/index.scss';

library.add(fal, fab)

const Layout = (props) => {
   return (
      <div className={layoutStyles.container}>
         <Head />
         <div className={layoutStyles.content}>
            <Header />
            {props.children}
         </div>
         <Footer />
      </div>
   )
}

export default Layout