import React from 'react';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import type { Review as ReviewType } from "../types/restaurant"
import { Rating } from './Rating';
import Image from 'next/image';

export const Review = ({ author, comment, created_date, rating, images }: ReviewType) => {
  return (
    <Box>
      <Flex justify="space-between">
        <Grid gridTemplateColumns="auto 1fr" gridColumnGap={2} gridRowGap={1} alignItems="center">
          <Text>Presentation:</Text><Rating rating={rating.presentation} />
          <Text>Taste:</Text><Rating rating={rating.taste} />
          <Text>Texture:</Text><Rating rating={rating.texture} />
        </Grid>
        {images.map(src => <Image key={src} src={src} alt="burger" width={108} height={85} />)}
      </Flex>
      <Text whiteSpace="pre-line" mt={2}>{comment}</Text>
      <Text mt={2} fontStyle="italic" fontSize="sm">{created_date} by {author}</Text>
    </Box>
  )
};


