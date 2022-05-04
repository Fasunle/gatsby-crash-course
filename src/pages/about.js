import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";

const About = (props) => {
  // get the graphql result as a data on the props object
  const {
    mdx: { body },
    graphCmsIcebreaker: { hobbies },
  } = props?.data;
  return (
    <div>
      <h1>About Me</h1>
      <p>This is about me page</p>
      <MDXRenderer>{body}</MDXRenderer>
      {/* You don't need MDXRenderer to use GraphCMS */}
      <div className="flex w-100 justify-items-center flex-col">
        <h2>List of my hobbies 😊</h2>
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {hobbies.map((hobby) => (
            <li
              className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
              key={hobby}>
              {hobby}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;

export const query = graphql`
  query Biography {
    mdx(frontmatter: { type: { eq: "bio" } }) {
      body
    }

    graphCmsIcebreaker(createdBy: { name: { eq: "kfasunle@gmail.com" } }) {
      hobbies
    }
  }
`;
