import { authInitState } from './auth/auth.init-state';

import { contactsInitState } from './posts/posts.init-state';
//import { profileInitState } from './profile/profile.init-state';
//import { userInitState } from './users/users.init-state';

export const initState = {

//  users: userInitState,
  contacts: contactsInitState,
  auth: authInitState,
  //profile: profileInitState,
};
