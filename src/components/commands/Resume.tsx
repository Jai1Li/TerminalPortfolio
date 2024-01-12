import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Resume: React.FC = () => {
  const { history, rerender } = useContext(termContext);
  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "resume") {
    window.open("https://drive.google.com/file/d/1c81EzWrC7PDJ9Rn45rgD1z7VzEZrt-oU/view?usp=sharing", "_blank");
  }

  return (
    <span data-testid="resume">
      <p>Please feel free to contact me through Linkedin, email, or give me a call!</p>
    </span>
  );
};

export default Resume;