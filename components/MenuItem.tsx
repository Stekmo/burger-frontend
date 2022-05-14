import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import type { MenuItem as MenuItemType } from "../types/restaurant"

export const MenuItem = ({ name, description, price }: MenuItemType) => {
  return (
    <Box>
      <Text fontWeight="bold">{name}</Text>
      <Text>{description}</Text>
      <Text>{price} ,-</Text>
    </Box>
  )
};
