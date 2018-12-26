import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  setAuthToken,
  clearAuth,
  authRequest,
  authSuccess,
  authError,
  login, 
  refreshAuthToken,
  storeAuthInfo
} from '../../../actions/auth'

import { API_SERVER_URL } from '../../../config';

describe('setAuthToken', ()=> {
  it('should return the action', ()=> {
    const authToken = 'testAuthToken';
    const action = setAuthToken(authToken);
    expect(action.type).toEqual(SET_AUTH_TOKEN);
    expect(action.authToken).toEqual(authToken);
  });
})

describe('clearAuth', ()=> {
  it('should return the action', ()=> {
    const action = clearAuth();
    expect(action.type).toEqual(CLEAR_AUTH);
  })
})

describe('authRequest', ()=> {
  it('should return the action', ()=> {
    const action = authRequest();
    expect(action.type).toEqual(AUTH_REQUEST);
  })
})

describe('authSuccess', ()=> {
  it('should return the action', ()=> {
    const user = 'testUser'
    const action = authSuccess(user)
    expect(action.type).toEqual(AUTH_SUCCESS);
    expect(action.currentUser).toEqual(user);
  })
})

describe('authError', ()=> {
  it('should return the action', ()=> {
    const error = {
      code: 200,
      message: 'error'
    }
    const action = authError(error);
    expect(action.type).toEqual(AUTH_ERROR);
    expect(action.error).toEqual(error);
  })
})

describe('login', ()=> {
  it('should login user', ()=> {
    const name = "Test"
    const email = "Khristest@email.com"
    const password = "khristest"

    global.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true,
        json() {
          return {
            id: 1234,
            name: name, 
            authToken: "123456"
          }
        }
      })
    )

    const dispatch = jest.fn();
    // return login(email, password)(dispatch).then(()=> {
    //   expect(fetch).toHaveBeenCalledWith(`${API_SERVER_URL}/auth/login`)
    //   expect(dispatch).toHaveBeenCalledWith(login(email, password));
    // })
  })
})