import { Outlet } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";
import Header from "./header/header";

export default function Layout() {
const [currentUser, setCurrentUser] = useCurrentUser()

  return (
    <>
      <Header user={currentUser} setUser={setCurrentUser}/>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet context={[currentUser, setCurrentUser]}/>
      </main>
    </>
  );
}
