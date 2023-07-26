import { Link, useOutletContext } from "react-router-dom";

export default function Thought({ thought }) {
  const [currentUser] = useOutletContext();
  return (
    <li className="font-medium">
      {thought.thought}
      <small className="block space-x-2 italic">
        <Link to={`/thoughts/${thought.author}`}>{thought.author}</Link>
        <span>{thought.date}</span>
        <span>{thought.time}</span>

        {currentUser === thought.author && (
          <div className="my-2 space-x-2">
            <button className="rounded bg-yellow-500 px-4 py-2">Edit</button>
            <button className="rounded bg-red-500 px-4 py-2">Delete</button>
          </div>
        )}
      </small>
    </li>
  );
}
