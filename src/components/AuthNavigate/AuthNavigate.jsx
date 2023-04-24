import { LinkComponent } from './AuthNavigate_css';

export const AuthNavigate = ({ to, title }) => {
  return <LinkComponent to={to}>{title}</LinkComponent>;
};
