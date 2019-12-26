import React from 'react'

import Header from './header'
import '../styles/index.scss'
// import layoutStyles from './layout.module.scss'

const Layout = (props) => {
   return (
      <div>
         <div>
            <Header/>
            {props.children}
         </div>
         {/* <Footer/> */}
      </div>
   )
}

export default Layout