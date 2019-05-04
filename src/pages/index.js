import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>Hello.</h1>
        <h2>
          I'm Cesar, a full-stack developer, living in beautiful Santa Monica.
        </h2>
        <p>
          Need a developer? <Link to="/contact">Contact me.</Link>
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
