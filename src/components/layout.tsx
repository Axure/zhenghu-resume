/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import styles from "./layout.module.css"
import { R } from "../r"

const Layout: React.FC<{}> = ({ children }) => {

  return (
    <div className={styles.layout}>
      <Header siteTitle={R().ZhengHuSResume} />
      <div
        className={styles.content}
      >
        <main>{children}</main>
        <footer className={styles.footer}>
          © {new Date().getFullYear()},
          {` `}
          <a href="https://colliot.org" className={styles.footerLink} target="_blank">{R().ZhengHu}</a>
        </footer>
      </div>
      <div className={styles.paddingForiPhoneX}/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
