import Homepage from "./pages/Homepage";
import ThemeProvider from "./context/ThemeContext";
import LanguageProvider from "./context/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Homepage />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
