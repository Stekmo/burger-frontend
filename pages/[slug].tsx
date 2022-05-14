import * as React from 'react'
import { Box, Container, Divider, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { formatAddress } from '../utils/format-address'
import { IoMdArrowBack } from 'react-icons/io'
import Link from 'next/link'
import { Review } from '../components/Review'

type Props = Restaurant

const Restaurant = ({ name, address, description, reviews }: Props) => {
	return <Container pt={20}>
    <Link href="/">
      <Flex mb={2} cursor="pointer">
        <IoMdArrowBack size={20} />
        <Text textDecoration="und" ml={2}>Go back</Text>
      </Flex>
    </Link>

    <Text fontSize="2xl" fontWeight="bold">{name} - <Text as="span" fontSize="md">{formatAddress(address)}</Text></Text>
    <Divider my={3} />

    <Tabs>
      <TabList>
        <Tab>Info</Tab>
        <Tab>Reviews</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Text>{description}</Text>
        </TabPanel>
        <TabPanel>
          {reviews.map(review => <Box pb={2} mb={4} key={review.id} borderBottom="1px solid rgba(0,0,0,0.2)">
            <Review {...review} />
          </Box>)}
        </TabPanel>
      </TabPanels>
    </Tabs>
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
    reviews: [
      {
        id: "1",
        comment: "Best food I've ever tasted",
        rating: 4.5,
        author: "Stephan Olsen",
        created_date: "14th May 06:04 - 2022"
      },
      {
        id: "2",
        comment: "10/10, would recommend!",
        rating: 5,
        author: "John Wick",
        created_date: "12th May 20:34 - 2022"
      },
      {
        id: "3",
        comment: "The owner is a prick, but the food is decent.",
        rating: 2,
        author: "Batman",
        created_date: "07th May 12:484 - 2022"
      }
    ]
  }
]

export type Review = {
  id: string
  comment: string
  rating: number
  author: string
  created_date: string
}

export type Restaurant = {
  name: string
  url: string
  address: {
    zipCode: number
    streetName: string
    streetNumber: string
  }
  description: string
  reviews: Review[]
}
