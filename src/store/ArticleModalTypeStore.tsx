import { atom } from "recoil";

export const articleModalTypeAtom = atom<string>({
  key: "articleModalTypeAtom",
  default: "create",
});
