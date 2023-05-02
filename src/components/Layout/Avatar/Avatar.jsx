import { useAuth } from 'Redux/auth/useAuth';
import { UserAvatar, UserAvatarSvg } from './Avatar.styled';
import { ReactComponent as AvatarSvg } from '../../../images/icons/userAvatar.svg';
import serverConnection from '../../constants/PARAMS'

export const Avatar = () => {
    const {user} = useAuth();
    const avatar = user.avatarURL;
    const pathAvatar = avatar?.substr(0,5) !== "https" ? `${serverConnection}/` + user.avatarURL : ""; 
    const pathAvatarFormat = pathAvatar.replace(/\\/g, "/");

    return (
        <>
            {pathAvatarFormat 
                ? (<UserAvatar src={pathAvatar} alt={'avatar'}/>) 
                : (<UserAvatarSvg>
                     <AvatarSvg/>
                    </UserAvatarSvg>)
            }       
        </>
    )
}