import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Error from "./components/error";
import Layout from "./components/layout";
import { About, Contact, Home, LoginRegister } from "./pages";
import { mutateThought, registerOrLogin } from "./pages/actions";
import { loadThoughts } from "./pages/loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path="/"
        element={<Home />}
        loader={loadThoughts}
        action={mutateThought}
      />
      <Route path="thoughts/:author" element={<Home />} loader={loadThoughts} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/login"
        element={<LoginRegister />}
        action={registerOrLogin}
      />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
