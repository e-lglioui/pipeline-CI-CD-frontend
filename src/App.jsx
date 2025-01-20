import { Toaster } from "sonner";
import AppRouter from "./routes";
// import { AuthWrapper } from "./components/auth/AuthWrapper";

function App() {
  return (
    <>
      <AppRouter />
      <Toaster position="bottom-right" richColors />
    </>
  );
}

export default App;