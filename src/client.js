import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/link-context'

const httpLink = createHttpLink({
  uri: 'https://graphql.fauna.com/graphql',
})

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: 'Bearer fnADttXMh8ACE8_nRAt6fj32-s0vzpw-ZaodBOtZ',
    },
  }
})

export const isBrowser = typeof window !== 'undefined'

export const client = isBrowser
  ? new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    })
  : {}
