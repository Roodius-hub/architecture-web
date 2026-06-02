import { authClient } from "./lib/auth-client";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ImageUploadForm from "./pages/Upload";

export default function App() {
  // const { data: session, isPending } =
  //   authClient.useSession();

  // if (isPending) return <p>Loading...</p>;

  // if (!session) {
  //   return <Login />;
  // }

  return <>
  <div>
    <Dashboard />
  </div>
  <div>
    <ImageUploadForm />
  </div>
  </>;
}