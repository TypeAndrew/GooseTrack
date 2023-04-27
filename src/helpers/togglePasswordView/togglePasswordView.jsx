import { ReactComponent as IconEye } from '../../images/icons/eye.svg';
import { ReactComponent as IconEyeHidden } from '../../images/icons/hide-eye.svg';

export const togglePasswordView = (typeInput ) => {
    if (typeInput === 'password') {
      return ({typeInput: 'text', toggleIcon: <IconEye/>})
    } else { return ({typeInput: 'password', toggleIcon: <IconEyeHidden/>})
    }
  };
