import React from "react";
import { DiFirebase, DiReact, DiGit } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle> Technologies </SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the web development world!
      From Front-End to Back-End
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer> 
          <ListTitle> Front-End </ListTitle>
          <ListParagraph>
            Experience With <br />
            React.js , Redux.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer> 
          <ListTitle> Back-End </ListTitle>
          <ListParagraph>
            Experience With <br />
            Node.js and Databases - MongoDB, MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="3rem" /> 
        <ListContainer> 
          <ListTitle> Tools </ListTitle>
          <ListParagraph>
            Experience With <br />
            Git, GitHub
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
