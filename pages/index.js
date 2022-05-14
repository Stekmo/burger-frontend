import Head from 'next/head'
import { Text, Input, Container, Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Burger Frontend</title>
        <meta name="description" content="The Burger Frontend description..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box bg="#fbfcf0">
        <Container height="100vh" display="flex" justifyContent="center" flexDirection="column">
          <Text fontSize="2xl" fontWeight="bold" mb={3}>The Burger Frontend 1.0™</Text>
          <Input bg="white" placeholder='Search for Burger restaurants' />
        </Container>
      </Box>
    </>
  )
}
