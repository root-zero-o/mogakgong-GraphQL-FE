import api from "./core";
import { SocialUser, User } from "../typings";

const apis = {
  signUpUser: (payload: User) => api.post("", payload),
  updateSocialUser: (payload: SocialUser) => api.patch("", payload),
};

export default apis;
