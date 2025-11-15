import { getCookies } from "@/utils/cookies";

export const REQUEST_HEADERS: Partial<RequestInit> = {
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer ${getCookies().jwtAuth}`,
    "Content-Type": "application/json",
    "User-Agent": "massive",
    "Access-Control-Allow-Origin": "*",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
};
