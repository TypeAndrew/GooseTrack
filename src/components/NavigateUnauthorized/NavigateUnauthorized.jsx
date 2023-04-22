import { LinkComponent } from './NavigateUnauthorized_css';

export const NavigateUnauthorized = ({ to, title }) => {
  return <LinkComponent to={to}>{title}</LinkComponent>;
};
