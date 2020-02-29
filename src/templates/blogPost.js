import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import RichText from '../utils/richText';

import blogStyles from "../styles/pages/blog.module.scss"


export const query = graphql`
  query($title: String!) {
    contentfulBlog(title: {eq: $title}) {
      title
      createdAt(formatString: "DD MMMM YYYY HH:MM")
      heroBody{
        heroBody
      }
      body{
        json
      }
    }
  }
`

const BlogPost = props => {
  const blog = props.data.contentfulBlog
  return (
    <Layout>
      <div className={blogStyles.post}>
        <h1>{blog.title}</h1>
        <span>{blog.createdAt}</span>
        <RichText text={blog.body.json} />
      </div>
    </Layout>
  );
}

export default BlogPost;