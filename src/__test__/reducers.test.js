import countryReducer from '../Redux/Store/Store';

test('The reducer called without any parameter shoult return an empty array ', () => {
  expect(countryReducer()).toHaveLength(0);
});
