import { getIronSession, IronSession } from "iron-session";
import { cookies } from "next/headers";

const COOKIE_PASSWORD =
  "fehfnskaleiehfnef2830r8fjafabe1289309-fakhegbbkafgakagkindvugfakf";

type UserSession = {
  username: FormDataEntryValue | null;
};

export const getSession = async (): Promise<IronSession<UserSession>> =>
  getIronSession(cookies(), {
    password: COOKIE_PASSWORD,
    cookieName: "session_id",
  });
