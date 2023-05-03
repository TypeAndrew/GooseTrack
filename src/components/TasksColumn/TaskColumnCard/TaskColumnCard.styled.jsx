import styled from 'styled-components';
import { variant } from 'styled-system';

export const Li = styled.li`
  position: relative;
  display: block;
  padding: 14px 12px 18px 16px;
  width: 100%;

  background: var(--secondary-bgc-color);
  border: 1px solid var(--auth-placeholder-color);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 14px 14px 18px;
  }
`;
export const H3 = styled.h3`
  margin-bottom: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: var(--primary-text-color);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const DivWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Div = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;
  border: 1.8px solid #3e85f3;
  border-radius: 32px;
  gap: 8px;
`;

export const DefImg = styled.div`
  width: 32px;
  height: 32px;
  border: 1.8px solid #3e85f3;
  border-radius: 32px;
  gap: 8px;
  padding: 5px;
`;

export const DivPriority = styled('div')(
  {
    padding: '4px 12px',
    height: '20px',
    borderRadius: '4px',
    color: '#F7F6F9',
    fontWeight: '600',
    fontSize: '10px',
    lineHeight: '12px',
  },

  variant({
    variants: {
      Low: {
        bg: '#72C2F8',
      },
      Medium: {
        bg: '#F3B249',
      },
      High: {
        bg: '#EA3D65',
      },
    },
  })
);
