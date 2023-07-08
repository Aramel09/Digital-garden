import { Suspense, useEffect } from "react";
import { Await, Form, useLoaderData, useOutletContext } from "react-router-dom";
import Error from "../components/error";
import { TextInput } from "../components/form";
import Loading from "../components/loading";
import ThoughtList from "../components/thoughts/thought-list";
import { decodeUserFromTokenCookie } from "../services/utils";

export default function Home() {
  const { thoughts } = useLoaderData();
  const [currentUser, setCurrentUser] = useOutletContext();

  useEffect(() => {
    setCurrentUser(decodeUserFromTokenCookie);
  });

  return (
    <>
      {currentUser && (
        <Form method="post">
          <h1>{currentUser}</h1>
          <TextInput id="thought" />
          <button className="btn">Submit</button>
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
