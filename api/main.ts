import api from "./core";
import { User } from "../typings";

const apis = {
  signUpUser: (payload: User) => api.post("", payload),
};

export default apis;
