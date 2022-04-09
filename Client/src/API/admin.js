import axios from "axios";
const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    var { token } = user;
    console.log(token);
    return token;
  }
};

export const API_ADMIN = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const scheduleSynopsisMS = async (data) => {
  let token = getToken();
  try {
    const res = await API_ADMIN.post("admin/add-session", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    return error.response;
  }
};
const adminService = {
  scheduleSynopsisMS,
};

export default adminService;
