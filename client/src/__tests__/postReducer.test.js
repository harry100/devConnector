import reducer from '../reducers/postReducer';
import * as types from '../actions/types';

describe('Post Reducer', () => {
  it('should return the initial state for postReducer ', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        posts: [],
        post: {},
        loading: false
      }
    )
  })

  it('should handle POST_LOADING', () => {
    expect(reducer({
      posts: [],
      post: {},
      loading: false
    }, {
      type: types.POST_LOADING
    })
    ).toEqual(
    {
      posts: [],
      post: {},
      loading: true
    }
    )
  })
})
