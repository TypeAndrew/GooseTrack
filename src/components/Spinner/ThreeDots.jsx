import { ThreeDots } from 'react-loader-spinner';
import { Div } from './Grid.styled';

export const SpinnerGrid = ({ children }) => {
  return (
    <Div><ThreeDots 
    height="80" 
    width="80" 
    radius="9"
    color="var(--accent-btn-background)" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
     /></Div>
  );
};