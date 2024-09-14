import { useTheme } from "../context/context";
import '../index.css';


function AlternarTema() {
  const [theme, toggleTheme] = useTheme();
  console.log(theme);

  return (
    <div className={theme.tema}>
      <p>Testando troca de Tema</p>
      <button onClick={toggleTheme}>Alternar tema {theme.tema}</button>
    </div>
  );
}

export default AlternarTema;
