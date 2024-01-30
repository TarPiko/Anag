import { types } from 'mobx-state-tree';

/**
 * status of claim - "review", "awaiting", "approved", "denied", "paid"
 */

const ClaimItemModel = types
  .model('ClaimItemModel', {
    vehiclePolicy: types.string,
    damage: types.string,
    damageInfo: types.string,
    policeReport: types.string,
    damagePhotos: types.array(types.string),
    reportFiles: types.array(types.string),
    firstName: types.string,
    lastName: types.string,
    address: types.string,
    phone: types.string,
    email: types.string,
    driverAccident: types.optional(types.string, ''),
    street: types.optional(types.string, ''),
    district: types.optional(types.string, ''),
    vehicleSpeed: types.optional(types.string, ''),
    roadConditions: types.optional(types.string, ''),
    driverLicense: types.optional(types.array(types.string), []),
    status: types.string,
  })
  .actions(store => ({
    setStatus: value => {
      store.status = value;
    },
  }));

export default ClaimItemModel;
