import { useContext } from "react";
import { ThemeContext } from "../util/ThemeContext";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeChange = (theme) => {
    toggleTheme(theme);
  };

  return (
    <div className="p-4 absolute right-0 lg:rotate-90 lg:top-[20rem] gap-2 flex ">
      <label htmlFor="themeSelect"></label>

      <motion.div
        className="flex gap-2"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div
          onClick={() => {
            handleThemeChange("theme-1");
          }}
          defaultValue="them-1"
          className="transition-all w-6 h-6 p-2 bg-blue-700 border cursor-pointer hover:border-4 rounded-full"
        ></div>
        <div
          onClick={() => {
            handleThemeChange("theme-2");
          }}
          defaultValue="them-2"
          className="transition-all w-6 h-6 p-2 bg-red-400 border cursor-pointer hover:border-4 rounded-full"
        ></div>
        <div
          onClick={() => {
            handleThemeChange("theme-3");
          }}
          defaultValue="them-3"
          className="transition-all w-6 h-6 p-2 bg-gray-600 border cursor-pointer hover:border-4 rounded-full"
        ></div>
        <div
          onClick={() => {
            handleThemeChange("theme-4");
          }}
          defaultValue="them-4"
          className="transition-all w-6 h-6 p-2 bg-blue-200 border cursor-pointer hover:border-4 rounded-full"
        ></div>
      </motion.div>
    </div>
  );
};
export default ThemeToggler;
