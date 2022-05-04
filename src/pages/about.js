import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";

const About = (props) => {
  // get the graphql result as a data on the props object
  const { body } = props?.data?.mdx;
  return (
    <div>
      <h1>About Me</h1>
      <p>This is about me page</p>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

export default About;

export const query = graphql`
  query Biography {
    mdx(frontmatter: { type: { eq: "bio" } }) {
      body
    }
  }
`;
