import { useContext, useEffect } from "react";
import {
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Recycler Project",
    desc: "A personal project with Andriod Studios that allow users to log in, post various goods, comment, purchase/sell and generate trackable deliveries.",
  },
  {
    id: 2,
    title: "VCU's Event Planner",
    desc: "An applocation that allows users to reserve meeting rooms, fields, computers, etc",
  },
  {
    id: 3,
    title: "Community COVID-19 Detection System",
    desc: "Internal Tool associated with lifecare that provides employee information regarding all subjects that were exposed to covid",
  },
  {
    id: 4,
    title: "Automated Information Extraction for Multilingual Lease Documents",
    desc: "An Internal Tool that can be fed approximately 10,000 lease documents that can gather, translate, download, and even export crucial information.",
  },
  {
    id: 5,
    title: "Universal Currency converter",
    desc: "Personal project created with XCode, that allows me to instantly convert any currency to USD",
  },
  {
    id: 6,
    title: "Network wide ad/scam blocker",
    desc: "Personal project that prevent potient scam calls, or advertisements from being fed through my home WIFI",
  },
];
export default Projects;
