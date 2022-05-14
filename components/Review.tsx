import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import type { Review as ReviewType } from "../pages/[slug]"
import { Rating } from './Rating';

export const Review = ({ author, comment, created_date, rating }: ReviewType) => {
  return (
    <Box>
      <Rating rating={rating} />
      <Text mt={2} fontStyle="italic" fontSize="sm">{created_date} by {author}</Text>
      <Text whiteSpace="pre-line" mt={2}>{comment}</Text>
    </Box>
  )
};


