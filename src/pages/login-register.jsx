import { Form, useNavigation } from "react-router-dom";
import { TextInput } from "../components/form";
import useError from "../hooks/useErrorShown";
import useRegistering from "../hooks/useRegistering";

export default function LoginRegister() {
  const navigation = useNavigation();

  let { error, isShowingError, setIsShowingError } = useError();

  const [isRegistering, setIsRegistering] = useRegistering();

  return (
    <Form
      method="post"
      onFocus={() => {
        setIsShowingError(false);
      }}
      onSubmit={() => {
        if (navigation.state === "submitting") error = null;
      }}
    >
      <h2>{isRegistering ? "Register" : "Login"}</h2>

      {error && isShowingError && <p className="error">{error}</p>}

      <TextInput id="username" />
      <TextInput type="password" id="password" />
      {isRegistering && (
        <TextInput
          id="confirmed-password"
          type="password"
          // Don't require the confirm password field. We will be checking it in 'handleSubmit' anyway.
          required={false}
        />
      )}

      <button type="submit" className="btn">
        {isRegistering ? "Register" : "Login"}
      </button>

      <button
        className="text-orange-500"
        type="button"
        onClick={() => setIsRegistering((prev) => !prev)}
      >
        {isRegistering ? "Already have an account?" : "Don't have an account?"}
      </button>
    </Form>
  );
}
