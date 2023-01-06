import { useTheme } from "../context";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`${theme}-theme`}>
      Header
      {/* <div onChange={(e) => setTheme(e.target.value)}>
        <input type="radio" value="light" name="gender" /> light
        <input type="radio" value="dark" name="gender" /> dark
      </div> */}
    </div>
  );
};

export default Header;
