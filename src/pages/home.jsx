import { Suspense, useEffect, useRef } from "react";
import { Await, Form, useLoaderData, useNavigation } from "react-router-dom";
import Error from "../components/error";
import { TextInput } from "../components/form";
import Loading from "../components/loading";
import ThoughtList from "../components/thoughts/thought-list";
import useError from "../hooks/useErrorShown";
import useSetCurrentUSer from "../hooks/useSetCurrentUser";

export default function Home() {
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    if (!error && isIdle) formRef.current.reset();

    const input = form.elements.namedItem("thought");
    if (!input) return;

    input.focus();
  });

  const { thoughts } = useLoaderData();
  const navigation = useNavigation();
  const currentUser = useSetCurrentUSer();

  const { error, isShowingError } = useError;
  const isIdle = navigation.state === "idle";

  return (
    <>
      {currentUser && (
        <Form method="post" ref={formRef}>
          <h1>{currentUser}</h1>
          <TextInput
            id="thought"
            placeholder={"What are you thinking?" + currentUser}
          />
          {error && isShowingError && <p className="error">{error}</p>}
          <button type="submit" className="btn">
            Submit
          </button>
        </Form>
      )}
      <Suspense fallback={<Loading />}>
        <Await resolve={thoughts} errorElement={<Error />}>
          <ThoughtList />
        </Await>
      </Suspense>
    </>
  );
}
