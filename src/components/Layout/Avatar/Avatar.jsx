import { useAuth } from 'Redux/auth/useAuth';
import { UserAvatar, UserAvatarSvg } from './Avatar.styled';
import { ReactComponent as AvatarSvg } from '../../../images/icons/userAvatar.svg';

export const Avatar = () => {
    const {user} = useAuth();
    const avatar = user.avatarURL;
    const pathAvatar = avatar?.substr(0,5) !== "https" ? "https://goose-track-back.onrender.com/" + user.avatarURL : ""; 
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