import React from "react";
import { WiAlien } from "react-icons/ai";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { SocialIcons } from "../Header/HeaderStyles";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>FullStack Developer</SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.linkedin.com/in/eddysantostech/")
        }
      >
        Contact me!{" "}
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
