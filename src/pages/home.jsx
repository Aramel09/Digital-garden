import { Suspense } from "react";
import { Await, Form, useLoaderData } from "react-router-dom";
import Error from "../components/error";
import { TextInput } from "../components/form";
import Loading from "../components/loading";
import ThoughtList from "../components/thoughts/thought-list";
import useSetCurrentUSer from "../hooks/useSetCurrentUser";

export default function Home() {
  const { thoughts } = useLoaderData();
  const currentUser = useSetCurrentUSer();

  return (
    <>
      {currentUser && (
        <Form method="post">
          <h1>{currentUser}</h1>
          <TextInput id="thought" />
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
