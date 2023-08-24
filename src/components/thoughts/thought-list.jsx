import { useAsyncValue } from "react-router-dom";
import Thought from "./thought";

export default function Thoughts({ setThought2Edit }) {
  const items = useAsyncValue();

  return (
    <ol className="list-decimal space-y-4">
      {items.map((thought) => (
        <Thought
          key={thought.id}
          thought={thought}
          setThought2Edit={setThought2Edit}
        />
      ))}
    </ol>
  );
}
