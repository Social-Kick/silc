import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fal } from "@fortawesome/pro-light-svg-icons";

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from '../styles/layout.module.scss'

library.add(fal)

const Layout = (props) => {
   return (
      <div className={layoutStyles.container}>
         <div className={layoutStyles.content}>
            <Header />
            {props.children}
         </div>
         <Footer />
      </div>
   )
}

export default Layout