import { Container } from 'components/Container/Container';
import { Grid } from 'react-loader-spinner';

export const SpinnerGrid = ({ children }) => {
  return (
    <Container><Grid
    height="80"
    width="80"
    color="var(--accent-btn-background)"
    ariaLabel="grid-loading"
    radius="12.5"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    margin='auto'
  /></Container>
  );
};
