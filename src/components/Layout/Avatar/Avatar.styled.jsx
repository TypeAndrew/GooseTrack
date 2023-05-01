import styled from 'styled-components';

export const UserAvatarSvg = styled.svg`
  width: 32px;
  height: 32px;
  fill: var(--avatar-fill-color);
  background-color: var(--avatar-bgc-color);
  border-radius: 50%;
  border: solid 1px var(--accent-bgc-color);
`;

export const UserAvatar = styled.img`
  width: 32px;
  height: 100%;
  border-radius: 50%;
  border: solid 1px var(--accent-background-color);
`;
