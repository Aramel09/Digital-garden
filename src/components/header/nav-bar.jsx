import { Link } from "react-router-dom";
import { delCookieToken } from "../../services/utils";

export default function NavBar({user, setUser}) {
  return (
    <nav className="border-b-2">
      <ul className="divide-y bg-slate-700 px-4 sm:flex sm:gap-x-16 sm:divide-y-0 [&>*]:py-4">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          {user ?(
          <button 
          onClick={() => {
              delCookieToken();
              setUser(null)
            }}>
              Logout
              </button>
              ) :(
              <Link to="/login">Login/Register</Link>
              )}
        </li>
      </ul>
    </nav>
  );
}
