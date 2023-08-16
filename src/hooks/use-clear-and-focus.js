import { useEffect, useRef } from "react";

export default function useClearForm(error, isIdle) {
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    if (!error && isIdle) formRef.current.reset();

    form.elements.namedItem("thought").focus();
  });

  return formRef;
}
