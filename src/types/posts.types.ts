export type InstagramPostProp = {
  id: string;
  caption?: string;
  media_url: string;
  media_type: "IMAGE" | "VIDEO" | "CAROSEL_ALBUM";
  timestamp: Date;
};
