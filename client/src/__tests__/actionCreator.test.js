import * as actions from '../actions/postActions.js';
import * as types from '../actions/types.js';


it('should create an action of post loading', () => {
  const expectedAction = {
    type: types.POST_LOADING
  }
  expect(actions.setPostLoading()).toEqual(expectedAction)
})
