import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useAuth } from '../../Redux/auth/useAuth';
import { updateInfo } from '../../Redux/auth/authOperations';
import plus from '../../images/icons/plusAvatar.svg';
import avatarDefault from '../../images/bg-images/avatarDefault.png';
import {
  Wrapper,
  Title,
  Forms,
  InputList,
  Input,
  DatePick,
  InputFile,
  ImgAvatar,
  ImgBtn,
  User,
  Container,
  LabelImg,
  LabelBtn,
  Btn,
} from './UserForm.styled';
import { SpinnerGrid } from 'components/Spinner/Grid';

  const UserForm = () => {

    const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();
  const [birthday, setBirthday] = useState(user.birthday ?? '');  
  const [avatarURL, setAvatarURL] = useState('');
  const [name, setName] = useState(user.name ?? '');
  const [skype, setSkype] = useState(user.skype ?? '');
  const [email, setEmail] = useState(user.email ?? '');
  const [phone, setPhone] = useState(user.phone ?? '');

  // console.log(avatarURL);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value, files } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'skype':
        setSkype(value);
        return;
      case 'email':
        setEmail(value);
        return;
      case 'phone':
        setPhone(value);
        return;
      case 'avatarURL':
        setAvatarURL(files[0]);
        return;
      default:
        return;
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const newUser = {
      name,
      email,
      phone,
      skype,
      birthday,
      avatarURL,
    };
    
    setIsLoading(true);

    await dispatch(updateInfo(newUser));

    setIsLoading(false);
  };

  return (
     <>{ isLoading ? <SpinnerGrid /> :
      (<Wrapper>
        <Forms autoComplete="off" onSubmit={handleSubmit}>
        <Container>
          <ImgAvatar src={user.avatarURL ?? avatarDefault} alt="avatar" />
        </Container>

        <LabelImg htmlFor="avatar">
          <ImgBtn src={plus} alt="user" />

          <InputFile
            id="avatar"
            type="file"
            onChange={handleChange}
            accept="image/*,.png,.jpg,.gif,.web"
            name="avatarURL"
          />
        </LabelImg>

        <Title> {user?.name ?? ' '} </Title>
        <User> User </User>

        <InputList>
          <LabelBtn htmlFor="username">
            User Name
            <Input
              type="text"
              value={name}
              name="name"
              id="name"
              onChange={handleChange}
            />
          </LabelBtn>
          <LabelBtn htmlFor="phone">
            Phone
            <Input
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={handleChange}
            ></Input>
          </LabelBtn>

          <LabelBtn htmlFor="birthday">
            Birthday
            <DatePick
              name="birthday"
              id="date"
              type="date"
              input={true}
              selected={birthday.toDate} // ДОДАЛА toDate - бо не рендерило, помилка, що неможна рядок встановлювати
              onChange={data => setBirthday(data)}
              dateFormat="dd/MM/yyyy"
            />
          </LabelBtn>

          <LabelBtn htmlFor="skype">
            Skype
            <Input
              type="text"
              name="skype"
              id="skype"
              value={skype}
              onChange={handleChange}
            />
          </LabelBtn>

          <LabelBtn htmlFor="email">
            Email
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
            />
          </LabelBtn>
        </InputList>

        <Btn type="submit"> Save changes </Btn>
      </Forms>
      </Wrapper>)}
      </>
  );
};

export default UserForm;