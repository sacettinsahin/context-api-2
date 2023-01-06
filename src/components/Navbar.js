import { useTheme, useLanguage } from "../context";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <div>
      {language === "tr" ? (
        <div className={`navbar ${theme}-theme`}>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            Change Theme!
          </button>

          <div className="links">
            <p></p>
            <ul>Links</ul>
            <span>Dil:</span>
            <select name="" id="" onChange={(e) => setLanguage(e.target.value)}>
              <option value="tr">tr</option>
              <option value="en">en</option>
            </select>
          </div>
        </div>
      ) : (
        <div className={`navbar ${theme}-theme`}>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            Change Theme
          </button>
          <div className="links">
            <p></p>
            <ul>Links</ul>
            <span>Language:</span>
            <select name="" id="" onChange={(e) => setLanguage(e.target.value)}>
              <option value="tr">tr</option>
              <option value="en">en</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
