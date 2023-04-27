import {
  FlexedCalendar,
  BlockNumber,
  CalendarButton,
  ButtonLink,
  BlockTitle,
  BlockText,
  BlockPicture,
  WrapperBlocktext,
  AllTextWrapper,
} from './mainPart.styled';

export const MainPart = ({
  blockNumber,
  buttonName,
  blockTitle,
  blockText,
  imageUrl,
  imageUrlx2,
}) => {
  return (
    <>
      <FlexedCalendar>
        <AllTextWrapper>
          <BlockNumber>{blockNumber}</BlockNumber>
          {buttonName ? (
            <CalendarButton>
              <ButtonLink>{buttonName}</ButtonLink>
            </CalendarButton>
          ) : null}
          <BlockTitle>{blockTitle}</BlockTitle>
          <WrapperBlocktext>
            <BlockText>{blockText}</BlockText>
          </WrapperBlocktext>
        </AllTextWrapper>
        <BlockPicture srcSet={`${imageUrl} 1x, ${imageUrlx2} 2x`} />
      </FlexedCalendar>
    </>
  );
};
