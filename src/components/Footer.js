import { useTheme } from "../context";

const Footer = () => {
  const { theme } = useTheme();

  return <div className={`${theme}-theme`}>Footer</div>;
};

export default Footer;
