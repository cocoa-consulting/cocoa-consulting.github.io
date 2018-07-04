import React from 'react'
import Link from 'gatsby-link'

import styles from '../styles/index.module.sass'

import Background from '../components/background'
import Logo from '../components/logo'

const IndexPage = () => (
  <div className={styles.container}>
    <Logo />
    <Background />
  </div>
)

export default IndexPage
