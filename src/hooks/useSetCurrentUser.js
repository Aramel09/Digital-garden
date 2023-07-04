import { decodeUserFromTokenCookie } from "../services/utils";
import { useEffect } from "react";

export default function useSetCurrentUSer() {
  useEffect(() => {
    setCurrentUser(decodeUserFromTokenCookie);
  });
}
