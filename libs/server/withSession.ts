import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
      now: number;
    };
  }
}

const cookieOption = {
  cookieName: "testironsession",
  password: "askncaknclaknslwiqnb;iwbvakn;lakj;avouwhoqliwflqiw",
};

export function withApiSession(fn: any) {
  console.log("withApiSession");
  return withIronSessionApiRoute(fn, cookieOption);
}
