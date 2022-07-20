import React from "react";
import { ThemeContext } from "../context/theme"
import { useContext } from "../context/user";

function ThemedButton({ ...props }) {
  const { theme } = useContext(ThemeContext);
  
  return <button className={theme} {...props} />;
}

export default ThemedButton;
