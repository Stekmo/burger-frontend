import { Box, Button, Flex, Grid, Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { Review } from "../pages/[slug]";
import { FileUpload } from "./FileUpload";
import { maxRating } from "./Rating";
import { nanoid } from 'nanoid'


type Props = {
  onSubmit: (review: Review) => void;
};

const initialRatingState = {
  presentation: 1,
  taste: 1,
  texture: 1,
};

export const SubmitReview = ({ onSubmit }: Props) => {
  const [files, setFiles] = React.useState<(File & { previewUrl: string })[]>([])
  const [comment, setComment] = React.useState("");
  const [rating, setRating] =
    React.useState<Review["rating"]>(initialRatingState);

  const onImagesSelected = (files: File[]) => {
    files.forEach((image, index) => {
      files[index]["previewUrl"] = URL.createObjectURL(image)
    })

    setFiles(files as any)
  }

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setComment(event.currentTarget.value);

  const onClick = () => {
    const review: Review = {
      comment,
      rating,
      author: "Unknown",
      created_date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      id: nanoid(),
      images: files.map(file => file.previewUrl),
    }

    onSubmit(review)
    setRating(initialRatingState)
    setComment("")
  };

  const updateRating = (name: keyof Review["rating"], rating: number) => {
    setRating((ratings) => ({
      ...ratings,
      [name]: rating,
    }));
  };

  return (
    <Box p={4} bg="#fefefe" borderRadius={4} overflow="hidden" mb={10}>
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

      <Box mt={2}>
        <FileUpload images={files.map(x => x.previewUrl)} onImagesSelected={onImagesSelected} />
      </Box>

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
