import React from 'react';
import Layout from "../components/layout";
import blogStyles from "../styles/pages/blog.module.scss"

import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import SEO from '../utils/seo';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulBlog{
        edges{
          node{
            title
            createdAt(formatString: "DD MMMM YYYY • HH:MM")
            heroBody{
              heroBody
            }
            heroImage{
              fluid(quality:100) {
              ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={"Nieuws"}/>
      <article className={blogStyles.blogPosts}>
        {data.allContentfulBlog.edges.map((edge, i) => {
          let formattedTitle = edge.node.title.replace(/\s+/g, '-').toLowerCase()
          if (formattedTitle.includes('?')) formattedTitle = formattedTitle.split('?').join('')
          if (formattedTitle.includes('#')) formattedTitle = formattedTitle.split('#').join('')
          let blog = edge.node;
          return (
            <section key={i}>
              <Link to={`/blog/${formattedTitle}`} className={blogStyles.blogPost}>
                <BackgroundImage fluid={blog.heroImage.fluid} className={blogStyles.heroImg}></BackgroundImage>
                <div className={blogStyles.content}>
                  <h1>{blog.title}</h1>
                  <span>{blog.createdAt}</span>
                  <p>{blog.heroBody.heroBody}</p>
                </div>
              </Link>
            </section>
          )
        })}
      </article>
    </Layout>
  );

}

export default Blog;