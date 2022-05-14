import * as React from "react";
import {
  Box,
  Container,
  Divider,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { formatAddress } from "../utils/format-address";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import { Review } from "../components/Review";
import { SubmitReview } from "../components/SubmitReview";
import { MenuItem } from "../components/MenuItem";

type Props = Restaurant;

const Restaurant = ({
  name,
  address,
  description,
  reviews,
  menuItems,
}: Props) => {
  const [submittedReviews, setSubmittedReviews] = React.useState<Review[]>([]);

  const onSubmit = (review: Review) => {
    // In a real world this would be sent to an api
    setSubmittedReviews((reviews) => [
      ...reviews,
      review,
    ]);
  };

  return (
    <Container pt={20}>
      <Link href="/">
        <Flex mb={2} cursor="pointer">
          <IoMdArrowBack size={20} />
          <Text textDecoration="und" ml={2}>
            Go back
          </Text>
        </Flex>
      </Link>

      <Text fontSize="2xl" fontWeight="bold">
        {name} -{" "}
        <Text as="span" fontSize="md">
          {formatAddress(address)}
        </Text>
      </Text>
      <Divider my={3} />

      <Tabs>
        <TabList>
          <Tab>Info</Tab>
          <Tab>Menu</Tab>
          <Tab>Reviews</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text>{description}</Text>
          </TabPanel>
          <TabPanel>
            {menuItems.map((item) => (
              <Box
                pb={2}
                mb={4}
                key={item.id}
                borderBottom="1px solid rgba(0,0,0,0.2)"
              >
                <MenuItem {...item} />
              </Box>
            ))}
          </TabPanel>
          <TabPanel>
            {reviews.concat(submittedReviews).map((review) => (
              <Box
                pb={2}
                mb={4}
                key={review.id}
                borderBottom="1px solid rgba(0,0,0,0.2)"
              >
                <Review {...review} />
              </Box>
            ))}
            <SubmitReview onSubmit={onSubmit} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Restaurant;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const restaurant = restaurants.find(
    (restaurant) => restaurant.url === context.params.slug
  );

  if (!restaurant) {
    return {
      notFound: true,
    };
  }

  return {
    props: restaurant,
  };
};

export const restaurants: Restaurant[] = [
  {
    name: "The Burger Joint",
    url: "the-burger-joint",
    address: {
      zipCode: 8000,
      streetName: "Skanderborgvej",
      streetNumber: "255",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae urna non est tempus finibus. Etiam cursus massa a sapien finibus sagittis. Sed at ultrices mauris, a consectetur dolor. Morbi sit amet erat nec elit consequat facilisis. Integer risus sapien, commodo ut aliquam eget, pulvinar ac neque. Ut suscipit rutrum purus lobortis sagittis. Ut sed neque dui. Proin sagittis ante nec ex blandit, ut scelerisque enim placerat. Integer malesuada iaculis elit, eu dignissim nisl elementum vel. Duis sed lectus sagittis, sagittis nulla a, fringilla lorem. Maecenas nunc sem, tempus condimentum gravida non, facilisis et quam. Nunc suscipit magna nec justo.",
    menuItems: [
      {
        name: "Cheese Burger",
        description:
          "Laborum officia culpa sit sit mollit officia quis culpa ad deserunt elit duis.",
        price: 45,
        id: "1",
      },
      {
        name: "Hamburger Burger",
        description: "Dolore in mollit amet non et in sint.",
        price: 55,
        id: "2",
      },
      {
        name: "Veggie Burger",
        description:
          "Ut labore aliqua nulla quis officia reprehenderit ea deserunt est duis sint ad.",
        price: 50,
        id: "3",
      },
    ],
    reviews: [
      {
        id: "1",
        comment: "Best food I've ever tasted",
        rating: {
          presentation: 4,
          taste: 5,
          texture: 5,
        },
        author: "Stephan Olsen",
        created_date: "14 May 06:04 - 2022",
        images: ["/burger.jpeg"]
      },
      {
        id: "2",
        comment: "10/10, would recommend!",
        rating: {
          presentation: 5,
          taste: 4,
          texture: 3,
        },
        author: "John Wick",
        created_date: "12 May 20:34 - 2022",
        images: ["/burger2.jpeg"]
      },
      {
        id: "3",
        comment: "The owner is a prick, but the food is decent.",
        rating: {
          presentation: 3,
          taste: 3,
          texture: 2,
        },
        author: "Batman",
        created_date: "May 7 12:48 - 2022",
        images: ["/burger3.jpeg"]
      },
    ],
  },
  {
    name: "Burger Palace",
    url: "the-burger-palace",
    address: {
      zipCode: 8000,
      streetName: "Skanderborgvej",
      streetNumber: "253",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae urna non est tempus finibus. Etiam cursus massa a sapien finibus sagittis. Sed at ultrices mauris, a consectetur dolor. Morbi sit amet erat nec elit consequat facilisis. Integer risus sapien, commodo ut aliquam eget, pulvinar ac neque. Ut suscipit rutrum purus lobortis sagittis. Ut sed neque dui. Proin sagittis ante nec ex blandit, ut scelerisque enim placerat. Integer malesuada iaculis elit, eu dignissim nisl elementum vel. Duis sed lectus sagittis, sagittis nulla a, fringilla lorem. Maecenas nunc sem, tempus condimentum gravida non, facilisis et quam. Nunc suscipit magna nec justo.",
    menuItems: [
      {
        name: "Cheese Burger",
        description:
          "Laborum officia culpa sit sit mollit officia quis culpa ad deserunt elit duis.",
        price: 45,
        id: "1",
      },
      {
        name: "Hamburger Burger",
        description: "Dolore in mollit amet non et in sint.",
        price: 55,
        id: "2",
      },
      {
        name: "Veggie Burger",
        description:
          "Ut labore aliqua nulla quis officia reprehenderit ea deserunt est duis sint ad.",
        price: 50,
        id: "3",
      },
    ],
    reviews: [
      {
        id: "1",
        comment: "Best food I've ever tasted",
        rating: {
          presentation: 4,
          taste: 5,
          texture: 5,
        },
        author: "Stephan Olsen",
        created_date: "14 May 06:04 - 2022",
        images: ["/burger.jpeg"]
      },
      {
        id: "2",
        comment: "10/10, would recommend!",
        rating: {
          presentation: 5,
          taste: 4,
          texture: 3,
        },
        author: "John Wick",
        created_date: "12 May 20:34 - 2022",
        images: ["/burger2.jpeg"]
      },
      {
        id: "3",
        comment: "The owner is a prick, but the food is decent.",
        rating: {
          presentation: 3,
          taste: 3,
          texture: 2,
        },
        author: "Batman",
        created_date: "May 7 12:48 - 2022",
        images: ["/burger3.jpeg"]
      },
    ],
  },
];

export type Review = {
  id: string;
  comment: string;
  rating: {
    taste: number
    texture: number
    presentation: number
  };
  author: string;
  created_date: string;
  images: string[]
};

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  id: string;
};

export type Restaurant = {
  name: string;
  url: string;
  menuItems: MenuItem[];
  address: {
    zipCode: number;
    streetName: string;
    streetNumber: string;
  };
  description: string;
  reviews: Review[];
};
