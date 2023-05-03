import { useAuth } from 'Redux/auth/useAuth';
import { UserAvatar, UserAvatarSvg,AvatarText } from './Avatar.styled';
import serverConnection from '../../constants/PARAMS'
import { useEffect , useState } from 'react';

export const Avatar = () => {
    const {user} = useAuth();
    const avatar = user.avatarURL;
    const name = user.name;
    const [countLogin, setCountLogin] = useState(0);
   
    useEffect(() => { 
        setCountLogin(Math.random());
    }, [setCountLogin])

    const pathAvatar = (avatar?.substr(0, 4) !== "http" &&
                        avatar !== undefined ) ? `${serverConnection}/` + user.avatarURL : ""; 
     
    const randomColor = '#' + Math.floor(countLogin*16777215).toString(16);
    const divStyle = { backgroundColor: randomColor };
   
    return (
        <>
            {(pathAvatar !== "" && pathAvatar !== `${serverConnection}/`)
                ? <UserAvatar src={pathAvatar} alt={'avatar'}/> 
                : 
                    <UserAvatarSvg style={divStyle}>
                    <AvatarText x="9" y="21" text-anchor="middle" >{name?.substr(0, 1).toUpperCase()}</AvatarText></UserAvatarSvg>
              
            }       
        </>
    )
}