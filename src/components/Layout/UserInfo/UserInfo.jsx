import { useAuth } from 'Redux/auth/useAuth';
import { UserName} from './UserInfo.styled';

export const UserInfo = () => {
    const {user} = useAuth();
    const name = user.name;

    return (
        <UserName>{name}</UserName>
    )
}