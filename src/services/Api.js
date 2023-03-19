import axios from "axios";

const HOST = "https://api.wisey.app";
const VERSION = "api/v1";

axios.defaults.baseURL = `${HOST}/${VERSION}`;

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getToken = async () => {
  try {
    const res = await axios.get("/auth/anonymous?platform=subscriptions");
    await setAuthHeader(res.data.token);
    return res.data.token;
  } catch (error) {
    return error.message;
  }
};

export const getCourses = async () => {
  try {
    const data = await axios.get("/core/preview-courses");
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getCourse = async (courseId) => {
  try {
    const data = await axios.get(`/core/preview-courses/${courseId}`);
    return data;
  } catch (error) {
    return error.message;
  }
};
