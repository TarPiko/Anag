import { types } from 'mobx-state-tree';

const QuoteItemModel = types
  .model('QuoteItemModel', {
    type: types.string,
    driverYear: types.string,
    gender: types.string,
    vin: types.string,
    vehicleYear: types.string,
    make: types.string,
    model: types.string,
    trim: types.string,
    // vehicleType: types.string,
    annualMileage: types.string,
    purposeVehicle: types.string,
    policyOption: types.string,
    price: types.string,
    isFinished: types.boolean,
    isPolicy: types.boolean,
    policyNumber: types.string,
    createdDate: types.number,
  })
  .actions(store => ({
    setIsPolicy: value => {
      store.isPolicy = value;
    },
    setIsFinished: value => {
      store.isFinished = value;
    },
  }));

export default QuoteItemModel;
