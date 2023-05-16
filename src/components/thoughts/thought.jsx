import { Link } from "react-router-dom";

export default function Thought({ thought }) {
  return (
    <li className="font-medium">
      {thought.thought}
      <small className="block space-x-2 italic">
        <Link to={`/thoughts/${thought.author}`}>{thought.author}</Link>
        <span>{thought.date}</span>
        <span>{thought.time}</span>
      </small>
    </li>
  );
}
