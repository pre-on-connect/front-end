import { atom } from "recoil";

export const articleImagesAtom = atom<string[]>({
  key: "articleImagesAtom",
  default: [],
});

export const articleContentAtom = atom({
  key: "articleContentAtom",
  default: "",
});

export const articleTagsAtom = atom({
  key: "articleTagsAtom",
  default: [],
});
