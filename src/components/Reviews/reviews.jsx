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
    name: 'Andrey',
    avatar: 'http://goose-track-back.onrender.com/images/team/Andrey.png',
    rating: 5,
    text: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    id: 2,
    name: 'Alex',
    avatar: 'http://goose-track-back.onrender.com/images/team/Alex.png',
    rating: 5,
    text: 'I used GooseTrack on my last trip and was really pleased with its functionality and ease of use.',
  },
  {
    id: 3,
    name: 'Sofia',
    avatar: 'http://goose-track-back.onrender.com/images/team/Sofia.png',
    rating: 5,
    text: 'I have been searching for an app that allows me to easily keep track of my travel routes and memories, and GooseTrack has been a real find.',
  },
  {
    id: 4,
    name: 'Vadym',
    avatar: 'http://goose-track-back.onrender.com/images/team/Vadym.png',
    rating: 5,
    text: "GooseTrack has a very useful expense tracking feature, which makes it easy to keep track of what you're spending your money on during your travels.",
  },
  {
    id: 5,
    name: 'Dima',
    avatar: 'http://goose-track-back.onrender.com/images/team/Dima.png',
    rating: 5,
    text: 'I highly recommend GooseTrack to anyone who wants to be organized and keep their travel data in order.',
  },
  {
    id: 6,
    name: 'Artur',
    avatar: 'http://goose-track-back.onrender.com/images/team/Artur.png',
    rating: 5,
    text: 'GooseTrack has a very useful expense tracking feature I highly recommend GooseTrack to anyone who wants to be organized and keep their travel data in order.',
  },
  {
    id: 7,
    name: 'Evgen',
    avatar: 'http://goose-track-back.onrender.com/images/team/Evgen.png',
    rating: 5,
    text: 'I highly recommend GooseTrack to anyone who wants to be organized and keep their travel data in order.',
  },
  {
    id: 8,
    name: 'Dmytro K.',
    avatar: 'http://goose-track-back.onrender.com/images/team/Dmytro K..png',
    rating: 5,
    text: 'I highly recommend GooseTrack to anyone! I used GooseTrack on my last trip and was really pleased',
  },
  {
    id: 9,
    name: 'Kristina',
    avatar: 'http://goose-track-back.onrender.com/images/team/Kristina.png',
    rating: 5,
    text: 'I used GooseTrack on my last trip and was really pleased and keep their travel data in order.',
  },
  {
    id: 10,
    name: 'Volodymyr',
    avatar: 'http://goose-track-back.onrender.com/images/team/Vova.png',
    rating: 5,
    text: 'I used GooseTrack on my last trip and was really pleased with its functionality and ease of use.',
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
            currentReview + (window.innerWidth >= 1280 ? 2 : 1)
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
