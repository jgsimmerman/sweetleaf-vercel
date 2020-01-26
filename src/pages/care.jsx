import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Header, CareList } from 'components';
import { Layout } from 'layouts';
import { Link } from 'gatsby';

const CareWrapper = styled.main`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
margin: 4rem 4rem 1rem 4rem;
a {
  color: ${props => props.theme.colors.white.base};
}
@media (max-width: 1000px) {
  margin: 4rem 2rem 1rem 2rem;
}
@media (max-width: 700px) {
  margin: 4rem 1rem 1rem 1rem;
}
`;
const PostWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
margin: 4rem 4rem 4rem 4rem;
.SocialIcon {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 25px;
  height: 25px;
}
@media (max-width: 1000px) {
  margin: 4rem 2rem 1rem 2rem;
}
@media (max-width: 700px) {
  margin: 4rem 1rem 1rem 1rem;
}
`;
const Nav = styled.nav`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
background: grey;
font-weight: 500;
font-size: 1.1rem;
align-items: center;
a {
  color: ${props => props.theme.colors.white.base};
  margin-left: 2rem;
  transition: all ${props => props.theme.transitions.default.duration};
  &:hover {
    color: ${props => props.theme.colors.white.grey};
  }
}
`;

const Care = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'Care Guides'} />
      <Header title="Care Guides">Sweet Leaf Plant Care Guides</Header>
      <PostWrapper>
          <h2>Sweet Leaf Plant Care Guides </h2>
      </PostWrapper> 

      <CareWrapper>
        {edges.map(({ node }) => (
          <CareList
            key={node.id}
            cover={node.frontmatter.cover.childImageSharp.fluid}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            //date={node.frontmatter.date}
            tags={node.frontmatter.tags}
            excerpt={node.excerpt}
          />
        ))}
      </CareWrapper>
    </Layout>
  );
};

export default Care;

Care.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { posttype: { eq: "guides" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
