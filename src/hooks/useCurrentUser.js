import { useState } from "react";
import { decodeUserFromTokenCookie } from "../services/utils";

export default function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState(decodeUserFromTokenCookie);

  return [currentUser, setCurrentUser];
}
