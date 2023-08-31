import { Suspense } from "react";
import { Await, Form, useLoaderData, useNavigation } from "react-router-dom";
import Error from "../components/error";
import { TextInput } from "../components/form";
import Loading from "../components/loading";
import ThoughtList from "../components/thoughts/thought-list";
import useClearForm from "../hooks/use-clear-and-focus";
import useError from "../hooks/useErrorShown";
import useSetCurrentUSer from "../hooks/useSetCurrentUser";

export default function Home() {
  const { thoughts } = useLoaderData();
  const navigation = useNavigation();
  const currentUser = useSetCurrentUSer();

  const { error, isShowingError } = useError;
  const isIdle = navigation.state === "idle";

  const { formRef, thought2Edit, setThought2Edit } = useClearForm(
    error,
    isIdle
  );
  const { thought } = thought2Edit || {};

  return (
    <>
      {currentUser && (
        <Form method={thought2Edit ? "PUT" : "POST"} ref={formRef}>
          {thought2Edit && (
            <input type="hidden" name="id" value={thought2Edit.id} />
          )}
          <h1>{currentUser}</h1>
          <TextInput
            id="thought"
            placeholder={"What are you thinking?" + currentUser}
            defaultValue={thought}
          />
          {error && isShowingError && <p className="error">{error}</p>}
          <button type="submit" className="btn" disabled={!isIdle}>
            {thought2Edit ? "Edit" : "Add"} Thought
          </button>
        </Form>
      )}
      <Suspense fallback={<Loading />}>
        <Await resolve={thoughts} errorElement={<Error />}>
          <ThoughtList setThought2Edit={setThought2Edit} />
        </Await>
      </Suspense>
    </>
  );
}
