import { Header } from '../../components/Header/header';
import { MainPart } from '../../components/MainPart/mainPart';
import { Reviews } from '../../components/Reviews/reviews';

import img_1x2 from '../../images/homePage_images/image_1x2.png';
import img_2x2 from '../../images/homePage_images/image_2x2.png';
import img_3x2 from '../../images/homePage_images/image_3x2.png';

import { FlexedCalendarSecond } from '../../components/MainPart/mainPart.styled';

const HomePage = () => {
  return (
    <>
      <Header />
      <MainPart
        blockNumber={'1.'}
        buttonName={'calendar'}
        blockTitle={'view'}
        blockText={
          "GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout."
        }
        imageUrl={img_1x2}
        imageUrlx2={img_1x2}
      />
      <FlexedCalendarSecond>
        <MainPart
          blockNumber={'2.'}
          blockTitle={'sidebar'}
          blockText={
            "GooseTrack offers easy access to your account settings, calendar, and filters. The 'My Account' section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks."
          }
          imageUrl={img_2x2}
          imageUrlx2={img_2x2}
        />
      </FlexedCalendarSecond>
      <MainPart
        blockNumber={'3.'}
        buttonName={'all in'}
        blockTitle={'one'}
        blockText={
          "GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout."
        }
        imageUrl={img_3x2}
        imageUrlx2={img_3x2}
      />
      <Reviews />
    </>
  );
};

export default HomePage;
