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

// import Andrey from '../../images/team/Andrey.png';

const reviews = [
  {
    id: 1,
    name: 'Andrey',
    avatar: 'http://goose-track-back.onrender.com/images/team/Andrey.png',
    rating: 4,
    text: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    id: 2,
    name: 'Alex',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6jHgKUFki1ejVCkQvpB5UT1Ct6T_VuZyHlg&usqp=CAU',
    rating: 5,
    text: 'I used GooseTrack on my last trip and was really pleased with its functionality and ease of use.',
  },
  {
    id: 3,
    name: 'Sofia',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKSLlP6BbLuqDsbb5bV-qK60yVrlfrU67pcw&usqp=CAU',
    rating: 4,
    text: 'I have been searching for an app that allows me to easily keep track of my travel routes and memories, and GooseTrack has been a real find.',
  },
  {
    id: 4,
    name: 'Vadym',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtoSLARc6dijlXHOXkMa9crfPlR_pm21bcEw&usqp=CAU',
    rating: 4,
    text: "GooseTrack has a very useful expense tracking feature, which makes it easy to keep track of what you're spending your money on during your travels.",
  },
  {
    id: 5,
    name: 'Dima',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1HcH-ObV1mr5Geoh1Pt7mcteU_uuOxYRLw&usqp=CAU',
    rating: 5,
    text: 'I highly recommend GooseTrack to anyone who wants to be organized and keep their travel data in order.',
  },
  {
    id: 6,
    name: 'Artur',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1HcH-ObV1mr5Geoh1Pt7mcteU_uuOxYRLw&usqp=CAU',
    rating: 4,
    text: 'I highly recommend GooseTrack to anyone who wants to be organized and keep their travel data in order.',
  },
  {
    id: 7,
    name: 'Evgen',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1HcH-ObV1mr5Geoh1Pt7mcteU_uuOxYRLw&usqp=CAU',
    rating: 5,
    text: 'I highly recommend GooseTrack to anyone who wants to be organized and keep their travel data in order.',
  },
  {
    id: 8,
    name: 'Dmytro K.',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1HcH-ObV1mr5Geoh1Pt7mcteU_uuOxYRLw&usqp=CAU',
    rating: 5,
    text: 'I highly recommend GooseTrack to anyone who wants to be organized and keep their travel data in order.',
  },
  {
    id: 9,
    name: 'Kristina',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1HcH-ObV1mr5Geoh1Pt7mcteU_uuOxYRLw&usqp=CAU',
    rating: 4,
    text: 'I highly recommend GooseTrack to anyone who wants to be organized and keep their travel data in order.',
  },
  {
    id: 10,
    name: 'Volodymyr',
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
