import { types } from 'mobx-state-tree';
import UserInfoModel from './models/UserInfoModel';
import QuoteItemModel from './models/QuoteItemModel';
import ClaimItemModel from './models/ClaimItemModel';

const UserModel = types
  .model('UserModel', {
    isOnBoarding: types.optional(types.boolean, false),
    isAuth: types.optional(types.boolean, false),
    userInfo: types.maybeNull(UserInfoModel),
    quotes: types.array(QuoteItemModel),
    claims: types.array(ClaimItemModel),
  })
  .actions(store => ({
    setOnBoarding: value => {
      store.isOnBoarding = value;
    },
    setIsAuth: value => {
      store.isAuth = value;
    },
    setUserInfo: data => {
      store.userInfo = data;
    },
    addNewQuote: data => {
      store.quotes = [...store.quotes, data];
    },
    addNewClaim: data => {
      store.claims = [...store.claims, data];
    },
  }));

export default UserModel;
