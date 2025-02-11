import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import "./Blogs.css";
import BlogCard from "./BlogCard";
import BlogCardTwo from "./BlogCardTwo";

const Blogs = () => {
  const blogData = [
    {
      blogimg: "/blog-one.png",
      blogdate: "08-11-2021",
      gategory: "Category",
      blogtitle: "Believing neglected so so allowance existence departure.",
      blogdesc:
        "Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.",
      url: "/",
    },
    {
      blogimg: "/blog-two.png",
      blogdate: "11-07-2024",
      gategory: "Category",
      blogtitle:
        "In design active temper be uneasy. Thirty for remove plenty regard you.",
      blogdesc:
        "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.",
      url: "/",
    },
  ];

  const BlogDataTwo = [
    {
      blogdate: "12-09-2025",
      gategory: "RAG",
      blogtitle: "Retrieval augmented language models",
      url: "https://medium.com/@arnnima/retrieval-augmented-language-models-d9f5d8cada16",
    },
    {
      blogdate: "12-09-2025",
      gategory: "Open AI",
      blogtitle: "What is deepseek",
      url: "https://medium.com/@arnnima/what-is-deepseek-4b48b3987c9a",
    },
    {
      blogdate: "12-09-2025",
      gategory: "Metaverse",
      blogtitle: "Metaverse and ai are reshaping the financial sector",
      url: "https://medium.com/@arnnima/metaverse-and-ai-are-reshaping-the-financial-sector-d23a4f092210",
    },
    {
      blogdate: "12-09-2025",
      gategory: "Metaverse",
      blogtitle: "Metaverse and ai are reshaping the financial sector",
      url: "https://medium.com/@arnnima/metaverse-and-ai-are-reshaping-the-financial-sector-d23a4f092210",
    },
  ];

  return (
    <>
      <div className="blog-container">
        <div className="blog-box">
          <div className="blog-head">
            <h3>
              Our Latest Blog
              <GoDotFill className="doticon" />
            </h3>
            <Link href="/all-blogs">
              <button className="blog-btn">See All Blog Posts</button>
            </Link>
          </div>

          <div className="blog-cards-box">
            <div className="blog-box-One">
              {blogData.map((blog, index) => (
                <BlogCard
                  key={index}
                  blogimg={blog.blogimg}
                  blogdate={blog.blogdate}
                  gategory={blog.gategory}
                  blogtitle={blog.blogtitle}
                  blogdesc={blog.blogdesc}
                  url={blog.url}
                />
              ))}
            </div>
            <div className="blog-box-Two">
              {BlogDataTwo.map((blog, index) => (
                <BlogCardTwo
                  key={index}
                  blogdate={blog.blogdate}
                  gategory={blog.gategory}
                  blogtitle={blog.blogtitle}
                  blogdesc={blog.blogdesc}
                  url={blog.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
