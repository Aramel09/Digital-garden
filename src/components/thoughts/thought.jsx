import {
  Link,
  useNavigation,
  useOutletContext,
  useSubmit,
} from "react-router-dom";

export default function Thought({ thought, setEditThought }) {
  const [currentUser] = useOutletContext();
  const submit = useSubmit();
  const navigation = useNavigation();
  const isIdle = navigation.state === "idle";
  return (
    <li className="font-medium">
      {thought.thought}
      <small className="block space-x-2 italic">
        <Link to={`/thoughts/${thought.author}`}>{thought.author}</Link>
        <span>{thought.date}</span>
        <span>{thought.time}</span>

        {currentUser === thought.author && (
          <div className="my-2 space-x-2">
            <button
              className="rounded bg-yellow-500 px-4 py-2"
              onClick={() => {
                setEditThought(thought);
              }}
            >
              Edit
            </button>
            <button
              disabled={!isIdle}
              className="rounded bg-red-500 px-4 py-2"
              onClick={() => {
                submit(
                  {
                    id: thought.id,
                    author: thought.author,
                  },
                  {
                    method: "DELETE",
                  }
                );
              }}
            >
              Delete
            </button>
          </div>
        )}
      </small>
    </li>
  );
}
