import { useEffect, useState } from "react";
import { useActionData } from "react-router-dom";

export default function useError() {
  const error = useActionData();
  const [isShowingError, setIsShowingError] = useState(false);

  useEffect(() => {
    if (error) setIsShowingError(true);
  }, [error]);

  return { error, isShowingError, setIsShowingError };
}
