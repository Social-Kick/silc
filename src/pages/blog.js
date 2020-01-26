import React from 'react';
import Layout from "../components/layout";
import blogStyles from "../styles/pages/blog.module.scss"

import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

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
              file{
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <article className={blogStyles.blogPosts}>
        {data.allContentfulBlog.edges.map((edge, i) => {
          let formattedTitle = edge.node.title.replace(/\s+/g, '-').toLowerCase()
          let blog = edge.node;
          const blogImgStyle = {
            backgroundImage: `url(${blog.heroImage.file.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }
          return (
            <section key={i}>
              <Link to={`/blog/${formattedTitle}`} className={blogStyles.blogPost}>
                <div style={blogImgStyle} className={blogStyles.heroImg}></div>
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