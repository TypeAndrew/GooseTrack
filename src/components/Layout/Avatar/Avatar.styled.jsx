import styled from 'styled-components';

export const UserAvatarSvg = styled.svg`
  width: 32px;
  height: 32px;
  fill: var(--avatar-fill-color);

  border-radius: 50%;
  border: solid 1px var(--accent-bgc-color);
 
`;

export const UserAvatar = styled.img`
  width: 32px;
  height: 100%;
  border-radius: 50%;
  border: solid 1px var(--accent-background-color);


`;

export const AvatarText = styled.text`


  text-align: center;
  font-weight: bold;

  `;