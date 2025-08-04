import "./App.css";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

function App() {
  return (
    <main className="container mx-auto min-h-screen flex flex-col justify-center items-center gap-2">
      <p>
        This{" "}
        <a className="underline" href="#">
          link
        </a>{" "}
        should not be focusable when the dialog is open
      </p>
      <Dialog />
      <Button>Open modal</Button>
    </main>
  );
}

export default App;
