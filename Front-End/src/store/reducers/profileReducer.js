import * as actionTypes from "../actions/actionTypes";

const initialState = {
  userData: {
    name: null,
    tagline: null,
    img: null,
    connections: null,
    saved: null,
    address: null,
    connection: null,
    about: null,
    experience: null,
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_DETAILS:
      return {
        userData: {
          ...state.userData,
          name: action.userData.user_name,
          tagline: action.userData.user_tagline,
          img: action.userData.user_avatar,
          connections: action.userData.connection,
          saved: action.userData.bookmarks,
        },
      };
    case actionTypes.FETCH_BANNER_DETAILS:
      // console.log(state.prof.userData);.
      return {
        // ...state,
        userData: {
          ...state.userData,
          address: action.user.location,
          about: action.user.about,
          experience: action.user.experience,
          address: action.user.location,
          name: `${action.user.first_name} ${action.user.last_name}`,
          tagline: action.user.tagline,
          img: action.user.avatar,
          connections: action.user.connection,
          // saved: action.userData.bookmarks,
        },
      };
    case actionTypes.EDIT_ABOUT_DETAILS:
      return {
        userData: {
          ...state.userData,
          about: action.about,
        },
      };

    case actionTypes.EDIT_USER_DATA:
      let newImg = action.details.profilePic;
      if (newImg === null) {
        newImg = state.userData.img;
      }
      return {
        userData: {
          ...state.userData,
          name: `${action.details.firstName} ${action.details.lastName}`,
          tagline: action.details.tagline,
          address: action.details.location,
          img: newImg,
        },
      };

    case actionTypes.EDIT_TAGLINE:
      return {
        userData: {
          ...state.userData,
          tagline: action.tagline,
        },
      };

    case actionTypes.EDIT_TAGLINE2:
      return {
        userData: {
          ...state.userData,
          tagline: action.tagline,
        },
      };

    case actionTypes.ADDED_CONNECTION:
      return {
        userData: {
          ...state.userData,
          connections: state.userData.connections + 1,
        },
      };

    case actionTypes.REMOVE_CONNECTION:
      return {
        userData: {
          ...state.userData,
          connections: state.userData.connections - 1,
        },
      };
  }
  return state;
};

export default profileReducer;
