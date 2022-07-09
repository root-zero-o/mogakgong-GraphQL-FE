// 타입은 여기가 좋겠군요
// interface vs type? interface로 가시죠! ^_^/

import { arrayBuffer } from "stream/consumers";

export interface Example {
  id: number;
  name: string;
}

export type Example = {
  id: number;
  name: string;
};

export interface User {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
  myText: string;
  myHour: number[];
}

export interface SocialUser {
  myText: string;
  myHour: number[];
}
