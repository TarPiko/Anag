import { types } from 'mobx-state-tree';

const UserInfoModel = types
  .model('UserInfoModel', {
    firstName: types.string,
    lastName: types.string,
    email: types.string,
    password: types.string,
    lastLogged: types.string,
  })
  .actions(store => ({
    setUserPass: newPass => {
      store.password = newPass;
    },
    setLoggedDate: lastDate => {
      store.lastLogged = lastDate.toString();
    },
  }));

export default UserInfoModel;
