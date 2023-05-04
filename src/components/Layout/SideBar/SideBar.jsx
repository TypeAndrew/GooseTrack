import { UserNav } from '../UserNav/UserNav';
import { useEffect } from 'react';
import { LogoutButton } from '../../Button/LogoutButton/LogoutButton'
import GooseLogo from '../../../images/icons/goose-logo.png';
import { ReactComponent as IconClose } from '../../../images/icons/icon-close.svg';
import { Container, Title, SpanSpecial, LogoContainer, CloseButton, LogoImg, Menu} from './SideBar.styled';

export const SideBar = ({isMobalMenuOpen, closeMobalMenu}) => {

  useEffect(() => {
    const close = e => {
        closeMobalMenu(false);
      }
    isMobalMenuOpen && window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [isMobalMenuOpen, closeMobalMenu]);

  const handleCloseMobalMenu = () => {
    closeMobalMenu(false);
  };

  return (
    <>
      <Container className={isMobalMenuOpen && 'openMobalMenu'} >
              <div>
              <Menu>
                <LogoContainer>
                  <LogoImg src={`${GooseLogo}`}/>
                  <Title>
                    G<SpanSpecial>oo</SpanSpecial>seTrack
                  </Title>
                </LogoContainer>
                <CloseButton onClick={handleCloseMobalMenu}>
                  <IconClose stroke={'var(--close-button-color)'}/>
                </CloseButton>
              </Menu>
              <UserNav closeMobalMenu={closeMobalMenu}/>
              </div>
              <LogoutButton />   
      </Container>
    </>
  );
};