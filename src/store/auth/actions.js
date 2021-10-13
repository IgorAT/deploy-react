
export function login(token) {
  return {
    type: 'LOGIN',
    payload: {
      token
    }
  }
}

export function logout(token) {
  return {
    type: 'LOGOUT',
  }
}