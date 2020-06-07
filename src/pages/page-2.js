// import { gql } from 'apollo-boost'
import { gql, useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const StyledStatementContainer = styled.section`
  display: flex;
  padding: 1rem;
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
  const { loading, error, data, networkStatus } = useQuery(GET_ALL_STATEMENTS, {
    pollInterval: 15000,
    notifyOnNetworkStatusChange: true,
  })

  if (networkStatus === 4) return 'hello!'
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <Layout>
      {!loading && data ? (
        data.allStatements.data.map((statement) => (
          <StyledStatementContainer key={statement._id}>{statement.utterance}</StyledStatementContainer>
        ))
      ) : (
        <>Loading...</>
      )}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
