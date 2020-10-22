import { TextureLoader, RepeatWrapping } from "three";

export const loadTexture = (url: string) => {
  const res = new TextureLoader().load(url);
  res.wrapS = RepeatWrapping;
  res.wrapT = RepeatWrapping;
  return res;
};
