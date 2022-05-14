import { Container } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import * as React from 'react'

type Props = {
  name: string
}

const Restaurant = (props: Props) => {
	return <Container pt={20}>
    {props.name}
  </Container>
}

export default Restaurant

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const restaurant = restaurants.find(restaurant => restaurant.url === context.params.slug)

  if (!restaurant) {
    return {
      notFound: true,
    }
  }

  return {
    props: restaurant,
  }
}



const restaurants = [
  {
    name: "The Burger Joint",
    url: "the-burger-joint",
  }
]
