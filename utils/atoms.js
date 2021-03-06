import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    email: null,
    name: null,
    id: null,
    photo: null,
  },
});
