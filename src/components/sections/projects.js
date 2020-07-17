import React, { useState, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import Heading from "../../styles/heading";
import { colors, breakpoints, transition } from "../../styles/theme";
import buttonStyles from "../../styles/buttonStyles";

const Container = styled.section`
  display: grid;
  align-items: center;
  padding: 0 1.5rem;
`;

const Project = styled.div`
  position: relative;

  @media (min-width: ${breakpoints.xs}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${(props) => (props.odd ? "" : "column-reverse")};
    margin-top: ${(props) => (props.odd ? "1rem" : "6rem")};
  }

  @media (min-width: ${breakpoints.md}) {
  }

  @media (min-width: ${breakpoints.lg}) {
    display: grid;
    grid-template-columns: ${(props) => (props.odd ? "2fr 1fr" : "1fr 2fr")};
    margin-top: ${(props) => (props.odd ? "1rem" : "20rem")};
  }
`;

const ProjectInfo = styled.div`
  @media (min-width: ${breakpoints.xxs}) {
    margin-top: 2rem;
    justify-self: start;
    align-self: start;
  }

  @media (min-width: ${breakpoints.md}) {
    justify-self: flex-start;
    align-self: center;
    margin-top: 3rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    justify-self: ${(props) => (props.odd ? "end" : "start")};
    align-self: center;
    margin-top: 0;
  }

  .project-num {
    display: flex;
    align-items: center;
    justify-items: start;

    .num {
      margin-right: 20px;
      color: ${colors.darkGrey};

      @media (min-width: ${breakpoints.xs}) {
        font-size: 1.3rem;
      }

      @media (min-width: ${breakpoints.md}) {
        font-size: 25px;
      }
    }

    .line {
      width: 60px;
      height: 2px;
      background: ${colors.faintGrey};
      margin-right: 20px;
    }
  }

  .project-name {
    margin-top: 15px;

    @media (min-width: ${breakpoints.xs}) {
      font-size: 1.5rem;
    }

    @media (min-width: ${breakpoints.md}) {
      font-size: 30px;
    }
  }

  .project-description {
    color: ${colors.almostWhite};
    font-size: 10px;
    width: 290px;
    margin: 14px 0;
    margin-bottom: 25px;
    line-height: 15px;
  }
`;

const ProjectImages = styled.div`
  position: relative;

  .project-image-1 {
    @media (min-width: ${breakpoints.xxs}) {
      width: 250px;
    }

    @media (min-width: ${breakpoints.xs}) {
      width: 320px;
    }

    @media (min-width: ${breakpoints.md}) {
      width: 550px;
    }

    @media (min-width: ${breakpoints.xl}) {
      width: 650px;
    }
  }

  .project-image-2 {
    position: absolute;
    z-index: 999;
    transform: translateY(0);

    @media (min-width: ${breakpoints.xss}) {
      width: 100px;
      left: 30%;
      bottom: 20%;
    }

    @media (min-width: ${breakpoints.xs}) {
      width: 170px;
      bottom: 10%;
      right: ${(props) => (props.odd ? "-13%" : "")};
    }

    @media (min-width: ${breakpoints.md}) {
      width: 300px;
      bottom: ${(props) => (props.odd ? "10%" : "-10%")};
      right: ${(props) => (props.odd ? "-25%" : "5%")};
    }

    @media (min-width: ${breakpoints.lg}) {
      width: 300px;
      bottom: -10%;
      right: ${(props) => (props.odd ? "5%" : "60%")};
      transition: ${transition};
    }

    @media (min-width: ${breakpoints.xl}) {
      width: 300px;
      bottom: -10%;
      right: ${(props) => (props.odd ? "10%" : "70%")};
    }
  }
`;

const ProjectTools = styled.div`
  border-top: 1px solid #333232;
  color: ${colors.lightGrey};
  font-size: 10px;
  display: flex;

  & > p {
    margin-right: 20px;
    margin-bottom: 20px;
    padding-top: 10px;
  }
`;

const ViewButton = styled.a`
  ${buttonStyles};

  font-size: 10px;
  padding: 8px 25px;
`;

function Projects({ data }) {
  const [elementInView, setelementInView] = useState({
    projectOne: false,
    projectTwo: false,
  });
  const projectOneRef = useRef(null);
  const projectTwoRef = useRef(null);

  useLayoutEffect(() => {
    const topPosition = (element) =>
      element.current.getBoundingClientRect().top;

    const projectOnePosition = topPosition(projectOneRef);
    const projectTwoPosition = topPosition(projectTwoRef);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (projectOnePosition < scrollPosition) {
        setelementInView((state) => ({ ...state, projectOne: true }));
      } else if (projectTwoPosition < scrollPosition) {
        setelementInView((state) => ({ ...state, projectTwo: true }));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Heading name="works" />

      <Project odd={true}>
        <ProjectImages odd={true} animate={elementInView.projectOne}>
          <div className="project-image-1">
            <Img
              alt="project-one-1"
              fluid={data.projectOne.childImageSharp.fluid}
            />
          </div>
          <div className="project-image-2" ref={projectOneRef}>
            <Img
              alt="project-image-2"
              fluid={data.projectOne2.childImageSharp.fluid}
            />
          </div>
        </ProjectImages>
        <ProjectInfo odd={true}>
          <div className="project-num">
            <div className="line"></div>
            <h1 className="num">01</h1>
          </div>
          <h2 className="project-name">Moviemania</h2>
          <p className="project-description">
            A web app that shows the latest movies and tv shows and their
            trailers. It consumes TMDB api to get the latest data.
          </p>
          <ProjectTools>
            <p>React</p>
            <p>Reach Router</p>
            <p>TMDB API</p>
          </ProjectTools>
          <ViewButton href="https://moviemania.netlify.app" target="_blank">
            View
          </ViewButton>
        </ProjectInfo>
      </Project>

      <Project>
        <ProjectInfo>
          <div className="project-num">
            <h1 className="num">02</h1>
            <div className="line"></div>
          </div>
          <h2 className="project-name">Ride My Way</h2>
          <p className="project-description">
            A carpooling web app that gives users the ability to share their
            rides with other users. Ride owners can either accept or decline the
            ride request.
          </p>
          <ProjectTools>
            <p>Node/Express</p>
            <p>React</p>
            <p>React Router</p>
          </ProjectTools>
          <ViewButton
            href="https://ride-my-way-client.herokuapp.com"
            target="_blank"
          >
            View
          </ViewButton>
        </ProjectInfo>

        <ProjectImages style={{ justifySelf: "end" }}>
          <div className="project-image-1">
            <Img
              alt="project-one-1"
              fluid={data.projectTwo.childImageSharp.fluid}
            />
          </div>
          <div className="project-image-2" ref={projectTwoRef}>
            <Img
              alt="project-one-2"
              fluid={data.projectTwo2.childImageSharp.fluid}
            />
          </div>
        </ProjectImages>
      </Project>
    </Container>
  );
}

export default Projects;
