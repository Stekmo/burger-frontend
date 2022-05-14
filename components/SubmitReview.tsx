import { Box, Button, Flex, Text, Textarea } from '@chakra-ui/react';
import React from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { maxRating } from './Rating';

type Props = {
  onSubmit: (comment: string, rating: number) => void
}

export const SubmitReview = ({ onSubmit }: Props) => {
  const [comment, setComment] = React.useState("")
  const [rating, setRating] = React.useState(1)

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setComment(event.currentTarget.value)

  const onClick = () => {
    onSubmit(comment, rating)
    setRating(1)
    setComment("")
  }

  return (
    <Box>
      <Textarea placeholder="Let others know about your experience" bg="white" value={comment} onChange={onChange} />
      <Flex mt={2} alignItems="center">
        <Text mr={2}>Select rating</Text>
        {Array.from(new Array(maxRating)).map((_, index) => {
          const changeRating = () => setRating(index + 1)
          if (index < rating) {
            return <IoIosStar onClick={changeRating} cursor="pointer" />
          }

          return <IoIosStarOutline onClick={changeRating} key={index} cursor="pointer" />
        })}
      </Flex>

      <Button mt={4} onClick={onClick}>Submit review</Button>
    </Box>
  )
};




