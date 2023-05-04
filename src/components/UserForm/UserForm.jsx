import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useAuth } from '../../Redux/auth/useAuth';
import { updateInfo, updateAvatar } from '../../Redux/auth/authOperations';
import plus from '../../images/icons/plusAvatar.svg';
import avatarDefault from '../../images/icons/userAvatar.svg';
import serverConnection from '../constants/PARAMS'
import {
  Wrapper,
  Title,
  Forms,
  InputList,
  Input,
  DatePick,
  InputFile,
  ImgAvatar,
  ImgAvatarDefault,
  ImgBtnWrapper,
  ImgBtn,
  User,
  ContainerAvatar,
  LabelImg,
  LabelBtn,
  Btn,
  DatePickerWrapper,
} from './UserForm.styled';
import { SpinnerGrid } from 'components/Spinner/Grid';

  const UserForm = () => {

  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();

  const avatar = user.avatarURL;
  let bearthdate = user.birthday; 
  let formatBearthdate = (bearthdate !== undefined) ? bearthdate.slice(0, 10) : "";  
  const pathAvatar = (avatar?.substr(0, 4) !== "http" &&
                        avatar !== undefined ) ? `${serverConnection}/` + user.avatarURL : ""; 
  const pathAvatarFormat = pathAvatar.replace(/\\/g, "/");
   

  const [birthday, setBirthday] = useState('');  

  const [avatarURL, setAvatarURL] = useState( pathAvatarFormat ?? '');
  const [name, setName] = useState(user.name ?? '');
  const [skype, setSkype] = useState(user.skype ?? '');
  const [email, setEmail] = useState(user.email ?? '');
  const [phone, setPhone] = useState(user.phone ?? '');
    
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
    
 
    if (avatarURL) {
      await dispatch(updateAvatar(newUser.avatarURL));
    }
    await dispatch(updateInfo(newUser));
    setIsLoading(false);
  };

  return (
     <>{ isLoading ? <SpinnerGrid /> :
      (<Wrapper>
        
        <Forms autoComplete="off" onSubmit={handleSubmit}>
                
        <ContainerAvatar>
            {(avatarURL !== "" && pathAvatar !== `${serverConnection}/`)
              ? <ImgAvatar src={pathAvatarFormat} alt="avatar" /> :
              <div>
                <ImgAvatarDefault
                  src={avatarDefault}
                  alt="avatar"
                />  
              </div>}
        </ContainerAvatar>

          <LabelImg htmlFor="avatar">
            <ImgBtnWrapper>
          <ImgBtn src={plus} alt="user" />
            </ImgBtnWrapper>
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
              placeholder='Enter your name'
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
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
              placeholder='Enter your phone'
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            ></Input>
            </LabelBtn>
            
          <DatePickerWrapper>
              <LabelBtn htmlFor="birthday">
            Birthday
            <DatePick
              name="birthday"
              id="date"
              value={formatBearthdate}
              type="date"
              input={true}
              selected={birthday.toDate} 
              onChange={setBirthday}
              dateFormat="YYYY-MM-DD"
            />
            </LabelBtn>
          </DatePickerWrapper>

          <LabelBtn htmlFor="skype">
            Skype
            <Input
              type="text"
              name="skype"
              id="skype"
              placeholder="Add a skype number"
              value={skype}
              onChange={handleChange}
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // required
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
