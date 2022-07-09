import api from "./core";
import { AccessToken, SocialUser, User } from "../typings";

const apis = {
  signUpUser: (payload: User) => api.post("", payload),
  updateSocialUser: (payload: SocialUser) => api.patch("", payload),
  postAccessToken: (payload: AccessToken) => api.post("", payload),
};

export default apis;
