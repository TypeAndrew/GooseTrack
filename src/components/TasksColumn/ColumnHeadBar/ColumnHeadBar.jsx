import { Div, H2, IconBtn } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ title }) => {
  return (
    <Div>
      <H2>{title}</H2>
      <IconBtn />
    </Div>
  );
};
