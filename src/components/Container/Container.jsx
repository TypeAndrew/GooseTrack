import {
  Div,
  Img,
  ImgBg,
  ImgText,
  Span,
  ImgTextLogin,
  ImgBgLogin,
  ImgLogin,
} from './Container_css';
import geese from '../../images/bg-images/geese_that_register.png';
import geese2x from '../../images/bg-images/geese_that_register@2x.png';
import flyGeese from '../../images/bg-images/geese_that_fly_on_rocket.png';
import flyGeese2x from '../../images/bg-images/geese_that_fly_on_rocket@2x.png';
import cloud from '../../images/bg-images/call_for_registration.png';
import cloud2x from '../../images/bg-images/call_for_registration@2x.png';

export const Container = ({ children, page }) => {
  return (
    <>
      <Div>{children}
      {page === 'register' && (
        <>
          <ImgText>
            Quickly <Span>register</Span> and familiarize yourself with the
            application!
            <ImgBg
              srcset={cloud + ' 1x,' + cloud2x + ' 2x'}
              src={cloud}
              alt="call for registration"
            />
          </ImgText>
          <Img
            srcset={geese + ' 1x,' + geese2x + ' 2x'}
            src={geese}
            alt="geese that register"
          />
        </>
      )}

      {page === 'login' && (
        <>
          <ImgTextLogin>
            Quickly <Span>come in</Span> and write down your tasks for the day!
            <ImgBgLogin
              srcset={cloud + ' 1x,' + cloud2x + ' 2x'}
              src={cloud}
              alt="call for login"
            />
          </ImgTextLogin>
          <ImgLogin
            srcset={flyGeese + ' 1x,' + flyGeese2x + ' 2x'}
            src={flyGeese}
            alt="geese that fly on rocket"
          />
        </>
      )}</Div>
    </>
  );
};
