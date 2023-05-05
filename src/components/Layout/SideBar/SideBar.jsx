import { UserNav } from '../UserNav/UserNav';
import { useEffect } from 'react';
import { LogoutButton } from '../../Button/LogoutButton/LogoutButton'
import GooseLogo from '../../../images/icons/goose-logo.png';
import { ReactComponent as IconClose } from '../../../images/icons/icon-close.svg';
import { Container, Title, SpanSpecial, LogoContainer, CloseButton, LogoImg, Menu} from './SideBar.styled';
import { useRef } from 'react';

export const SideBar = ({isMobalMenuOpen, closeMobalMenu}) => {
  const node = useRef();

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(node, () => {
    if (isMobalMenuOpen) {
      closeMobalMenu();
    }
  });

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
      <Container className={isMobalMenuOpen && 'openMobalMenu'} ref={node}>
            <div>
              <Menu>
                <LogoContainer>
                  <LogoImg src={`${GooseLogo}`}/>
                  <Title>
                    G<SpanSpecial>oo</SpanSpecial>seTrack
                  </Title>
                </LogoContainer>
                <CloseButton onClick={handleCloseMobalMenu} aria-label='Close menu'>
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