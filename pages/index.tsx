import React from "react";
import Head from "next/head";
import { Text, Input, Container, Box, Button, Flex } from "@chakra-ui/react";
import { Restaurant, restaurants } from "./[slug]";
import Link from "next/link";
import { AutocompleteInput } from "../components/AutocompleteInput";

export default function Home() {
  const [searchResult, setSearchResults] = React.useState<Restaurant[]>([]);
  const [search, setSearch] = React.useState("");

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value
    setSearch(searchValue)
    if (!searchValue) {
      setSearchResults([])
      return
    }

    const matchingResults = restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(searchValue.toLowerCase()))
    setSearchResults(matchingResults)
  };

  return (
    <>
      <Head>
        <title>The Burger Frontend</title>
        <meta name="description" content="The Burger Frontend description..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        height="100vh"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={3}>
          The Burger Frontend 1.0™
        </Text>
        <Flex>
          <AutocompleteInput
            searchValue={search}
            onSearchValueChange={onSearch}
            searchResults={searchResult}
          />
          <Button ml={4}>Search</Button>
        </Flex>
      </Container>
    </>
  );
}
