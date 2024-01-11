import React, { useEffect, useState } from 'react';
import {
  AboutWrapper,
} from '../styles/About.styled';

const Resume: React.FC = () => {
  const [resumeOpened, setResumeOpened] = useState(false);

  useEffect(() => {
    const openResumeInNewTab = () => {
      if (!resumeOpened) {
        // Replace 'URL_TO_YOUR_RESUME' with the actual URL to your resume
        const resumeUrl = 'https://drive.google.com/file/d/1c81EzWrC7PDJ9Rn45rgD1z7VzEZrt-oU/view?usp=sharing';
        window.open(resumeUrl, '_blank');
        setResumeOpened(true);
      }
    };

    // Open the resume when the component mounts
    openResumeInNewTab();
  }, [resumeOpened]);

  return (
    <AboutWrapper data-testid="resume">
      <p>Please feel free to contact me through Linkedin, email, or give me a call!</p>
    </AboutWrapper>
  );
};

export default Resume;