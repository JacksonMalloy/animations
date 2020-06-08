// import { gql } from 'apollo-boost'
import { gql, useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

const StyledStatementContainer = styled(motion.section)`
  display: flex;
  padding: 2.5rem;
  font-size: 1.5rem;
  background-color: #0a0b0f;
  color: #ffffff;
  margin: 1rem;
  border-radius: 1rem;
`
// Query for fetching on the client
const GET_ALL_STATEMENTS = gql`
  query GetStatements {
    allStatements {
      data {
        _id
        permission
        saved
        utterance
      }
    }
  }
`

const SecondPage = () => {
  const controls = useAnimation()

  //   Horizontal IN
  useEffect(() => {
    controls.start((i) => ({
      x: 0,
      transition: { delay: i * 0.05 + 1, type: 'spring', mass: 1.6, damping: 600, velocity: 10, staggerDirection: 1 },
    }))
  }, [controls])

  const { loading, error, data, networkStatus } = useQuery(GET_ALL_STATEMENTS, {
    pollInterval: 875000,
    notifyOnNetworkStatusChange: true,
  })

  if (networkStatus === 4 || error)
    return (
      <Layout scroll>
        <StyledStatementContainer>Error! {error.message}</StyledStatementContainer>
      </Layout>
    )
  if (loading)
    return (
      <Layout scroll>
        <StyledStatementContainer>Fetching New Data...</StyledStatementContainer>
      </Layout>
    )

  return (
    <Layout scroll>
      {!loading && data ? (
        data.allStatements.data.map((statement, i) => (
          <StyledStatementContainer
            key={statement._id}
            custom={i}
            initial={{ x: 455 }}
            animate={{ x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {statement.utterance}
          </StyledStatementContainer>
        ))
      ) : (
        <StyledStatementContainer>Loading...</StyledStatementContainer>
      )}
      {/* <Link to="/">Go back to the homepage</Link> */}
    </Layout>
  )
}

export default SecondPage
