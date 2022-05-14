import { Container, Divider, Flex, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import * as React from 'react'
import { formatAddress } from '../utils/format-address'
import { IoMdArrowBack } from 'react-icons/io'
import Link from 'next/link'

type Props = Restaurant

const Restaurant = ({ name, address, description }: Props) => {
	return <Container pt={20}>
    <Link href="/">
      <Flex mb={2} cursor="pointer">
        <IoMdArrowBack size={20} />
        <Text textDecoration="und" ml={2}>Go back</Text>
      </Flex>
    </Link>

    <Text fontSize="2xl" fontWeight="bold">{name} - <Text as="span" fontSize="md">{formatAddress(address)}</Text></Text>
    <Divider my={3} />
    <Text>{description}</Text>
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



const restaurants: Restaurant[] = [
  {
    name: "The Burger Joint",
    url: "the-burger-joint",
    address: {
      zipCode: 8000,
      streetName: "Skanderborgvej",
      streetNumber: "255",
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae urna non est tempus finibus. Etiam cursus massa a sapien finibus sagittis. Sed at ultrices mauris, a consectetur dolor. Morbi sit amet erat nec elit consequat facilisis. Integer risus sapien, commodo ut aliquam eget, pulvinar ac neque. Ut suscipit rutrum purus lobortis sagittis. Ut sed neque dui. Proin sagittis ante nec ex blandit, ut scelerisque enim placerat. Integer malesuada iaculis elit, eu dignissim nisl elementum vel. Duis sed lectus sagittis, sagittis nulla a, fringilla lorem. Maecenas nunc sem, tempus condimentum gravida non, facilisis et quam. Nunc suscipit magna nec justo.",

  }
]

export type Restaurant = {
  name: string
  url: string
  address: {
    zipCode: number
    streetName: string
    streetNumber: string
  }
  description: string
}
