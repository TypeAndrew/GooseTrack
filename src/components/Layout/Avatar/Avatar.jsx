import { useAuth } from 'Redux/auth/useAuth';
import { UserAvatar, UserAvatarSvg } from './Avatar.styled';
import { ReactComponent as AvatarSvg } from '../../../images/icons/userAvatar.svg';

export const Avatar = () => {
    const {user} = useAuth();
    const avatar = user.avatarURL;

    return (
        <>
            {avatar 
                ? (<UserAvatar src={avatar} alt={'avatar'}/>) 
                : (<UserAvatarSvg>
                     <AvatarSvg/>
                    </UserAvatarSvg>)
            }       
        </>
    )
}