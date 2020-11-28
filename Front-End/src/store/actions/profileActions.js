import axios from "../../API/baseURL/baseURL";
import * as actionTypes from "./actionTypes";

export const fetchDataDispatch = (data) => {
  return {
    type: actionTypes.FETCH_USER_DETAILS,
    userData: data,
  };
};

export const fetchUserData = () => {
  return (dispatch) => {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("/user/info/", config)
      .then((res) => {
        console.log(res);
        dispatch(fetchDataDispatch(res.data));
        // this.setState({ loading: false, details: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchBannerDispatch = (data) => {
  return {
    type: actionTypes.FETCH_BANNER_DETAILS,
    user: data,
  };
};

export const fetchBannerData = () => {
  return (dispatch) => {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let profID = localStorage.getItem("profileID");

    axios
      .get(`/user/profile/banner/${profID}/`, config)
      .then((res) => {
        console.log(res);
        dispatch(fetchBannerDispatch(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// export const editAboutUser = (aboutData) => {
//   console.log(aboutData)
//   return (dispatch) => {
    
//   };
// };


// export const increment = () => {
//     return {
//         type: actionTypes.INCREMENT
//     };
// };

// export const decrement = () => {
//     return {
//         type: actionTypes.DECREMENT
//     };
// };

// export const add = ( value ) => {
//     return {
//         type: actionTypes.ADD,
//         val: value
//     };
// };

// export const subtract = ( value ) => {
//     return {
//         type: actionTypes.SUBTRACT,
//         val: value
//     };
// };
