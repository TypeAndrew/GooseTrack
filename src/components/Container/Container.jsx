import { Div, Img, ImgBg, ImgText, Span } from "./Container_css";
import geese from '../../images/bg-images/geese_that_register.png';
import cloud from '../../images/bg-images/call_for_registration.png';


export const Container = ({ children }) => {
    return (
        
            <><Div>{children}</Div>
            <ImgText>Quickly <Span>register</Span> and familiarize yourself with the application!<ImgBg src={cloud} alt='call_for_registration'/></ImgText>
            <Img src={geese} alt='geese that register'/>
            </>
            
    );
}
