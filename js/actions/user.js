import getMe from 'services/api/me';

export {
  getUser
};


function getUser() {
  return dispatch => {
    return getMe().then(({ data }) => {
      dispatch({
        type: 'GET_USER',
        payload: data
      });
    });
  };
}
