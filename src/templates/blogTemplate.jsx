import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import '../styles/prism';

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${props => props.theme.colors.white.light};
  box-shadow: ${props => props.theme.shadow.suggestion};
`;
const blogSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`;

const blog = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const {html, frontmatter, excerpt } = data.markdownRemark
  const {date, title, tags, path, story, sku, price} = frontmatter
  const image = frontmatter.cover.childImageSharp.fluid;
  console.log('blogTemplate', price)

  const defaultPrice = data.markdownRemark.frontmatter.price
  let priceString = JSON.stringify(defaultPrice)
  let priceParse = JSON.parse(priceString)
  return (
    <Layout>
      <SEO
        title={title}
        description={story}
        banner={image}
        pathname={path}
        price={priceParse}
        sku={sku}
        article
      />
      <Header title={title} date={date} cover={image} />
      <Container>
        <Content input={html} />
        <TagsBlock list={tags || []} />
      </Container>
      <SuggestionBar>
        <blogSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </blogSuggestion>
        <blogSuggestion>
          {next && (
            <Link to={next.frontmatter.path}>
              Next
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </blogSuggestion>
      </SuggestionBar>
    </Layout>
  );
};

export default blog;

blog.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        story
        sku
        price
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;