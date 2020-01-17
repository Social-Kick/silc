import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import RichText from '../components/estate/richText';

import blogStyles from "../styles/blog.module.scss"


export const query = graphql`
  query($title: String!) {
    contentfulBlog(title: {eq: $title}) {
      title
      heroBody{
        heroBody
      }
      body{
        json
      }
      heroImage{
        file{
          url
        }
      }
    }
  }
`
// let converter = Intl.NumberFormat("nl")

const BlogPost = props => {
  const blog = props.data.contentfulBlog
  return (
    <Layout>
      <div className={blogStyles.post}>
        <h1>{blog.title}</h1>
        <RichText text={blog.body.json} />
      </div>
    </Layout>
  );
}

export default BlogPost;