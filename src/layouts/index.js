import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const title =
  'Cocoa Consulting | React Development Specialists in Worcester, UK'

const Layout = ({ children, data }) => (
  <div>
    <Helmet title={title} meta={[{ name: 'description', content: title }]} />
    {children()}
  </div>
)

export default Layout
