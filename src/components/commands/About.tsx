import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Jai Li</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Software Engineer</HighlightAlt> based in Burke, Virginia.
      </p>
      <p>
        I'm a coding enthusiasts that love to<br />
        solve complex problems and build things.
      </p>
    </AboutWrapper>
  );
};

export default About;
