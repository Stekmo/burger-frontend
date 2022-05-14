import React from "react";
import { Box, Text, Image, Grid } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

type Props = {
  images: string[]
  onImagesSelected: (files: File[]) => void
}

export const FileUpload = ({ images, onImagesSelected }: Props) => {
  const onDrop = React.useCallback((acceptedFiles) => onImagesSelected(acceptedFiles), [onImagesSelected]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <>
      <Grid mb={4} gridTemplateColumns="1fr 1fr 1fr" gridAutoRows="1fr" gridGap={2}>
        {images.map((src) => (
          <Image
            key={src}
            src={src}
            alt="your image upload"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        ))}
      </Grid>
      <Box
        {...getRootProps()}
        border="1px dashed gray"
        padding={3}
        cursor="pointer"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <Text>Drop your image here</Text>
        ) : (
          <Text>Click to upload an image</Text>
        )}
      </Box>
    </>
  );
};
