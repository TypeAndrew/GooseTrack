import { LinkComponent } from './AuthNavigate.styled';

export const AuthNavigate = ({ to, title }) => {
  return <LinkComponent to={to}>{title}</LinkComponent>;
};
