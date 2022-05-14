import Head from 'next/head'
import { Text, Input, Container, Box, Button, Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Burger Frontend</title>
        <meta name="description" content="The Burger Frontend description..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container height="100vh" display="flex" justifyContent="center" flexDirection="column">
        <Text fontSize="2xl" fontWeight="bold" mb={3}>The Burger Frontend 1.0™</Text>
        <Flex>
          <Input bg="white" placeholder='Search for Burger restaurants' />
          <Button ml={4}>Search</Button>
        </Flex>
      </Container>
    </>
  )
}
