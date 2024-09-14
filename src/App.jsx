import { ThemeProvider } from "./context/context.jsx";
import AlternarTema from "./components/alteraTema.jsx";

function App() {
  return (
    <ThemeProvider>
      <AlternarTema />
    </ThemeProvider>
  );
}

export default App;
