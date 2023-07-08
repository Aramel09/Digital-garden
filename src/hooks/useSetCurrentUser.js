import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { decodeUserFromTokenCookie } from "../services/utils";

export default function useSetCurrentUSer() {
  const [currentUser, setCurrentUser] = useOutletContext();

  useEffect(() => {
    setCurrentUser(decodeUserFromTokenCookie);
  });

  return currentUser;
}
