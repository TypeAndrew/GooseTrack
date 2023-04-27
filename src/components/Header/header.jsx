import {
  FlexHeader,
  MainLogo,
  SpanLogo,
  StyledButton,
  StyledLogoIMG,
  StyledIMG,
  StyledSignUpLink,
  TabletWrapper,
  LoginButtonLink,
} from './header.styled';

export const Header = () => {
  return (
    <>
      <FlexHeader>
        <StyledLogoIMG />
        <MainLogo>
          G<SpanLogo>oo</SpanLogo>seTrack
        </MainLogo>
        <TabletWrapper>
          <StyledButton>
            <LoginButtonLink from="/home" to="/login" title="login">
              Log in
            </LoginButtonLink>
            <StyledIMG />
          </StyledButton>
          <StyledSignUpLink from="/home" to="/register" title="Sign up">
            Sign Up
          </StyledSignUpLink>
        </TabletWrapper>
      </FlexHeader>
    </>
  );
};
