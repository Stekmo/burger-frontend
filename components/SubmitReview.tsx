import { Box, Button, Flex, Grid, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { Review } from "../pages/[slug]";
import { maxRating } from "./Rating";

type Props = {
  onSubmit: (comment: string, rating: Review["rating"]) => void;
};

const initialRatingState = {
  presentation: 1,
  taste: 1,
  texture: 1,
};

export const SubmitReview = ({ onSubmit }: Props) => {
  const [comment, setComment] = React.useState("");
  const [rating, setRating] =
    React.useState<Review["rating"]>(initialRatingState);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setComment(event.currentTarget.value);

  const onClick = () => {
    onSubmit(comment, rating);
    setRating(initialRatingState);
    setComment("");
  };

  const updateRating = (name: keyof Review["rating"], rating: number) => {
    setRating((ratings) => ({
      ...ratings,
      [name]: rating,
    }));
  };

  return (
    <Box>
      <Textarea
        placeholder="Let others know about your experience"
        bg="white"
        value={comment}
        onChange={onChange}
      />
      <Grid
        mt={2}
        gridTemplateColumns="auto 1fr"
        gridColumnGap={2}
        gridRowGap={1}
        alignItems="center"
      >
        <Text>Presentation:</Text>
        <RatingSelector
          name="presentation"
          rating={rating.presentation}
          setRating={updateRating}
        />
        <Text>Taste:</Text>
        <RatingSelector
          name="taste"
          rating={rating.taste}
          setRating={updateRating}
        />
        <Text>Texture:</Text>
        <RatingSelector
          name="texture"
          rating={rating.texture}
          setRating={updateRating}
        />
      </Grid>

      <Button mt={4} onClick={onClick}>
        Submit review
      </Button>
    </Box>
  );
};

const RatingSelector = ({
  rating,
  setRating,
  name,
}: {
  name: keyof Review["rating"];
  rating: number;
  setRating: (name: string, rating: number) => void;
}) => {
  return (
    <Flex>
      {Array.from(new Array(maxRating)).map((_, index) => {
        const changeRating = () => setRating(name, index + 1);

        if (index < rating) {
          return <IoIosStar onClick={changeRating} cursor="pointer" />;
        }

        return (
          <IoIosStarOutline
            onClick={changeRating}
            key={index}
            cursor="pointer"
          />
        );
      })}
    </Flex>
  );
};
