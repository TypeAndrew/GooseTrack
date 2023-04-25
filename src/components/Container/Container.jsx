import { Div, Img, ImgBg, ImgText, Span, ImgTextLogin, ImgBgLogin, ImgLogin } from "./Container_css";
import geese from '../../images/bg-images/geese_that_register.png';
import flyGeese from '../../images/bg-images/geese_that_fly_on_rocket.png';
import cloud from '../../images/bg-images/call_for_registration.png';


export const Container = ({ children, page }) => {
    return (
        
            <><Div>{children}</Div>
            {page === 'register' && 
            <>
            <ImgText>Quickly <Span>register</Span> and familiarize yourself with the application!<ImgBg src={cloud} alt='call for registration'/></ImgText>
            <Img src={geese} alt='geese that register'/>
            </>}

            {page === 'login' && <>
            <ImgTextLogin>Quickly <Span>come in</Span> and write down your tasks for the day!<ImgBgLogin src={cloud} alt='call for login'/></ImgTextLogin>
            <ImgLogin src={flyGeese} alt='geese that fly on rocket'/>
            </>}
            </>
            
    );
}
