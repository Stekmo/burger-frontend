import React from 'react';
import { Flex } from '@chakra-ui/react';
import { IoIosStarHalf, IoIosStarOutline, IoIosStar } from 'react-icons/io'

const maxRating = 5

export const Rating = ({ rating }: { rating: number}) => {
  const sum = Math.round(rating * 2)
	const full = Math.floor(sum / 2)
	const half = sum % 2

	const blank = maxRating - full - half

  return (
    <Flex>
      {Array.from(new Array(full)).map((_, i) => <IoIosStar key={i}/>)}
      {Array.from(new Array(half)).map((_, i) => <IoIosStarHalf key={i}/>)}
      {Array.from(new Array(blank)).map((_, i) => <IoIosStarOutline key={i}/>)}
    </Flex>
  )
};
