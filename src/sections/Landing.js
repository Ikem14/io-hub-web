import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import Fade from 'react-reveal/Fade';
import { SectionLink } from 'react-scroll-section';
import StatIcon from '@material-ui/icons/TrendingDown';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
          site {
            siteMetadata {
              deterministicBehaviour
            }
          }
        }
      `}
      render={({ contentfulAbout, site }) => {
        const { name, socialLinks, roles } = contentfulAbout;
        const { deterministicBehaviour } = site.siteMetadata;

        return (
          <Fragment>
            <Heading
              textAlign="center"
              as="h1"
              color="primary"
              fontSize={[6, 7]}
              mb={[3, 4, 5]}
            >

              <Fade forever>
                <h1 color="khaki">io-Hub!</h1>
              </Fade>

            </Heading>

            <Heading
              as="h2"
              color="khaki"
              fontSize={[5, 6]}
              mb={[3, 5]}
              textAlign="center"
              style={centerHorizontally}
            >
              
              <TextLoop interval={5000}>
                {/* {roles
                  .sort(() => deterministicBehaviour || Math.random() - 0.5)
                  .map((text) => (
                    <Text width={[300, 500]} key={text}>
                      {text}
                    </Text>
                  ))} */}
                <span role="img" aria-label="uptodate news">
                  Up-to-date COVID-19 News 🚀
                </span>
                <span role="img" aria-label="live stats">
                  Live COVID-19 Statistics 📱
                  <StatIcon fontSize='large' color="secondary" />
                </span>
              </TextLoop>
            </Heading>
            
            <SectionLink section="news">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
