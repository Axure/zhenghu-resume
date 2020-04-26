import { Link } from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"
import styles from "./header.module.css"
import { R } from "../r"
import { langaugeList } from "../languageList"
import { getPassiveLocale } from "../getPassiveLocale"
import envelope from "./envelope.svg"
import phone from "./phone.svg"
import github from "./github.svg"
import wordpress from "./wordpress.svg"

import leetcode from "./leetcode.png"
import stackoverflow from "./stackoverflow.png"
import codewars from "./codewars.png"

const Header: React.FC<{ siteTitle?: string }> = () => (
  <header
    className={styles.header}
  >
    <div
      className={styles.top}
    >
      <div className={styles.title}>
        <div
          className={styles.linkContainer}
        >
          <Link
            to="/"
            className={styles.link}
          >
            {R().ZhengHu}
          </Link>
        </div>
        <div className={styles.subTitle}>{R().SD}{R().comma}{R().MathEnsu}，编程语言爱好者</div>
      </div>
      {/*<div className={styles.languageSwitch}>*/}
      {/*  <div className={styles.languageSwitchTitle}>{R().SwitchLanguage}<span dangerouslySetInnerHTML={{ __html: R().colon }}/></div>*/}
      {/*  <div className={styles.languageSwitchList}>{langaugeList.map(language => {*/}
      {/*    return <a*/}
      {/*      key={language}*/}
      {/*      className={*/}
      {/*        styles.languageSwitchListItem +*/}
      {/*        (getPassiveLocale() === language ? ` ${styles.languageSwitchListItemActive}` : "")*/}
      {/*      }*/}
      {/*      href={`${location.pathname}?locale=${language}`}*/}
      {/*    >{R()[language]}</a>*/}
      {/*  })}</div>*/}
      {/*</div>*/}
    </div>
    <div className={styles.contacts}>
      <div className={styles.contactHeader}>{R().Contact}<span dangerouslySetInnerHTML={{ __html: R().colon }}/></div>
      <a className={styles.contactGroup} href="mailto:freetiger18@gmail.com">
        <img className={styles.contactIcon} src={envelope} />
        freetiger18@gmail.com
      </a>
      <a className={styles.contactGroup} href="tel:+86-18668032670">
        <img className={styles.contactIcon} src={phone} />
        +86-18668032670
      </a>
      <a className={styles.contactGroup} href="https://github.com/Axure" target="_blank">
        <img className={styles.contactIcon} src={github} />
        Axure
      </a>
      <a className={styles.contactGroup} href={`https://colliot.org/${getPassiveLocale()}/`} target="_blank">
        <img className={styles.contactIcon} src={wordpress} />
        https://colliot.org
      </a>
    </div>
    <div className={styles.community}>
      <div className={styles.contactHeader}>{R().Communities}<span dangerouslySetInnerHTML={{ __html: R().colon }}/></div>
      <a className={styles.contactGroup} href="https://www.codewars.com/users/Axure" target="_blank">
        <img className={styles.contactIcon} src={codewars} />
        Axure{R().leftBracket}1 dan, {R().Top} 0.098%{R().rightBracket}
      </a>
      <a className={styles.contactGroup} href="https://stackoverflow.com/users/3345885/colliot" target="_blank">
        <img className={styles.contactIcon} src={stackoverflow} />
        Colliot{R().leftBracket}1344 {R().Rep}{R().rightBracket}
      </a>
      <a className={styles.contactGroup} href="https://leetcode.com/axurez/" target="_blank">
        <img className={styles.contactIcon} src={leetcode} />
        Axurez
      </a>
    </div>
    <div className={styles.community}>
      <div className={styles.contactHeader}>英文水平<span dangerouslySetInnerHTML={{ __html: R().colon }}/></div>
      <div className={styles.contactGroup} >
        TOEFL: 112 | S24 | W28 | R30 | L30
      </div>
      <div className={styles.contactGroup} >
        GRE: V168 | Q170 | AW4.0
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
