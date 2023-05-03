import { useAuth } from 'Redux/auth/useAuth';
import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
import {
  Li,
  H3,
  DivWrap,
  Div,
  Img,
  DivPriority,
  DefImg,
} from './TaskColumnCard.styled';
import { ReactComponent as AvatarSvg } from '../../../images/icons/userAvatar.svg';
import serverConnection from '../../constants/PARAMS';

export const TaskColumnCard = ({ task }) => {
  const { user } = useAuth();
  const avatarSrc = `${serverConnection}/` + user.avatarURL;

  return (
    <Li>
      <H3>{task.title}</H3>

      <DivWrap>
        <Div>
          {user.avatarURL ? <Img alt="User avatar" src={avatarSrc}></Img> : <DefImg><AvatarSvg/></DefImg>}
          <DivPriority variant={task.priority}>{task.priority}</DivPriority>  
        </Div>

        <TaskToolbar status={task.category} task={task}/>
      </DivWrap>
    </Li>
  );
};
