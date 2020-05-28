import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import Heading from "../../styles/heading";
import { colors, transition } from "../../styles/theme";

const Container = styled.section`
  /* margin: 0 auto; */
  display: grid;
  align-items: center;
`;

const ProjectImageTwo = styled.div`
  width: ${(props) => props.odd ? '320px' : '350px'};
  position: absolute;
  top: ${(props) => props.odd ? '45%' : '50%'};
  left: ${(props) => props.odd ? '28%' : '35%'};
  z-index: 100;
`;

const Section = styled.div`
  position: relative;
  margin-top: ${(props) => (props.addTopMargin ? "250px" : "")};
`;

const StyledSection = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.even ? "2fr 1fr" : "1fr 2fr")};

  .projectOne {
    width: 650px;
  }
`;

const ProjectInfo = styled.div`
  justify-self: start;
  align-self: center;

  .projectNum {
    display: flex;
    align-items: center;
    justify-items: start;

    h1 {
      font-size: 30px;
      color: ${colors.darkGrey};
      margin-right: 20px;
    }

    .line {
      width: 60px;
      height: 2px;
      background: ${colors.faintGrey};
      margin-right: 20px;
    }
  }

  .project-name {
    font-size: 25px;
    margin-top: 15px;
  }

  .project-description {
    color: ${colors.grey};
    font-size: 10px;
    width: 290px;
    margin: 14px 0;
    margin-bottom: 25px;
    line-height: 15px;
  }
`;

const ViewButton = styled.a`
  font-size: 10px;
  border: 1px solid ${colors.primaryColor};
  color: ${colors.white};
  padding: 8px 25px;
  transition: ${transition};

  &:hover {
    background: ${colors.primaryColor};
    border: 1px solid ${colors.primaryColor};
  }
`;

function Projects({ data }) {
  const [elementInView, setelementInView] = useState(false);
  return (
    <Container>
      <Heading name="works" />
      <Section>
        <StyledSection even={true} >
          <div className="projectOne">
            <Img
              alt="project-one-1"
              fluid={data.projectOne.childImageSharp.fluid}
            />
          </div>
          <ProjectInfo>
            <div className="projectNum">
              <div className="line"></div>
              <h1>01</h1>
            </div>
            <h2 className="project-name">Moviemania</h2>
            <p className="project-description">
              A web app that shows the latest movies and tv shows and their
              trailers. It consumes TMDB api to get the latest data.
            </p>
            <ViewButton>View</ViewButton>
          </ProjectInfo>
        </StyledSection>
        <ProjectImageTwo>
          <Img
            alt="project-one-2"
            fluid={data.projectOne2.childImageSharp.fluid}
          />
        </ProjectImageTwo>
      </Section>

      <Section addTopMargin={true}>
        <StyledSection>
          <ProjectInfo>
            <div className="projectNum">
              <h1>02</h1>
              <div className="line"></div>
            </div>
            <h2 className="project-name">Ride My Way</h2>
            <p className="project-description">
              A carpooling web app that gives users the ability to share their
              rides with other users. Ride owners can either accept or decline
              the ride request.
            </p>
            <ViewButton>View</ViewButton>
          </ProjectInfo>
          <div className="projectOne">
            <Img
              alt="project-one-1"
              fluid={data.projectTwo.childImageSharp.fluid}
            />
          </div>
        </StyledSection>
        <ProjectImageTwo odd={true}>
          <Img
            alt="project-one-2"
            fluid={data.projectTwo2.childImageSharp.fluid}
          />
        </ProjectImageTwo>
      </Section>
    </Container>
  );
}

export default Projects;
