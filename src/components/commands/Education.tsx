import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "A.S in Computer Science",
    desc: "Northern Virginia Community College| 2018 ~ 2019",
  },
  {
    title: "B.S in Computer Science",
    desc: "Virginia Commonwealth University | 2020 - 2022",
  }
];

export default Education;
