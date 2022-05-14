import { Box, Input } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {
  searchValue: string
  onSearchValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  searchResults: {
    name: string
    url: string
  }[]
}

export const AutocompleteInput = ({ searchValue, onSearchValueChange, searchResults }: Props) => {
  return (
    <Box width="100%">
      <Input
        bg="white"
        placeholder="Search for Burger restaurants"
        value={searchValue}
        onChange={onSearchValueChange}
      />
      <Box position="relative" borderRadius="sm">
        <Box position="absolute" top="0" width="100%">
          {searchResults.map(({ name, url }) => (
            <Link key={url} href={url}>
              <Box bg="white" cursor="pointer" p={3} _hover={{ bg: "#f7f7f7" }}>
                {name}
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
