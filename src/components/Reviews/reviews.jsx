import React, { useState } from 'react';
import { ReactComponent as ArrowLeft } from '../../images/homePage_images/arrow_left.svg';
import { ReactComponent as ArrowRight } from '../../images/homePage_images/arrow_right.svg';
import {
  ReviewsTitle,
  Container,
  ReviewContainer,
  Avatar,
  Name,
  Rating,
  Star,
  ReviewText,
  ButtonContainer,
  Button,
  FlexConteiner,
  WrapperReviewConteiner,
} from '../Reviews/reviews.styled';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    avatar:
      'data:image/jpeg;base64,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',
    rating: 4,
    text: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    id: 2,
    name: 'Gary Fisher',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6jHgKUFki1ejVCkQvpB5UT1Ct6T_VuZyHlg&usqp=CAU',
    rating: 5,
    text: 'I used GooseTrack on my last trip and was really pleased with its functionality and ease of use.',
  },
  {
    id: 3,
    name: 'Anna Stone',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKSLlP6BbLuqDsbb5bV-qK60yVrlfrU67pcw&usqp=CAU',
    rating: 4,
    text: 'I have been searching for an app that allows me to easily keep track of my travel routes and memories, and GooseTrack has been a real find.',
  },
  {
    id: 4,
    name: 'Bob Marley',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoSLARc6dijlXHOXkMa9crfPlR_pm21bcEw&usqp=CAU',
    rating: 3,
    text: "GooseTrack has a very useful expense tracking feature, which makes it easy to keep track of what you're spending your money on during your travels.",
  },
  {
    id: 5,
    name: 'Nick Griswold',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1HcH-ObV1mr5Geoh1Pt7mcteU_uuOxYRLw&usqp=CAU',
    rating: 5,
    text: 'I highly recommend GooseTrack to anyone who wants to be organized and keep their travel data in order.',
  },
];

export const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview(
      currentReview === reviews.length - 1 ? 0 : currentReview + 1
    );
  };

  const prevReview = () => {
    setCurrentReview(
      currentReview === 0 ? reviews.length - 1 : currentReview - 1
    );
  };

  return (
    <Container>
      <ReviewsTitle>reviews</ReviewsTitle>
      <WrapperReviewConteiner>
        {reviews
          .slice(
            currentReview,
            currentReview + (window.innerWidth >= 1440 ? 2 : 1)
          )
          .map(review => (
            <ReviewContainer key={review.id}>
              <FlexConteiner>
                <Avatar src={review.avatar} alt={review.name} />
                <Name>{review.name}</Name>
              </FlexConteiner>
              <Rating>
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    active={index < review.rating}
                    onClick={() => console.log(`Rating: ${index + 1}`)}
                  >
                    ★
                  </Star>
                ))}
              </Rating>

              <ReviewText>{review.text}</ReviewText>
            </ReviewContainer>
          ))}
      </WrapperReviewConteiner>
      <ButtonContainer>
        <Button onClick={prevReview}>
          <ArrowLeft />
        </Button>
        <Button onClick={nextReview}>
          <ArrowRight />
        </Button>
      </ButtonContainer>
    </Container>
  );
};
