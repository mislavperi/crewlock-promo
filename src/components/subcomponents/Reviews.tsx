import { Divider, Flex, Text } from "@chakra-ui/react";

type Review = {
  title: string;
  review: string;
  profilePicture: React.ReactNode;
  name: string;
};

type ReviewsProps = {
  reviews: Review[];
};

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <Flex flexWrap="wrap" alignItems="center">
      {reviews.map((review, index) => (
        <Flex
          key={index}
          p={5}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          m={10}
          bg="white"
          flexDirection="column"
          maxWidth="500px"
          height="600px"
        >
          <Flex flexDirection="column" alignItems="center">
            {review.profilePicture}
            <Text mt={2} fontWeight="bold" fontSize="2xl" align="center">
              {review.title}
            </Text>
          </Flex>
          <Divider />
          <Text mt={2} align="center">
            {review.review}
          </Text>
          <Text fontStyle="italic" justifySelf="flex-end" color="grey">
            Review by {review.name}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Reviews;
