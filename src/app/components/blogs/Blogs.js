import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import "./Blogs.css";
import BlogCard from "./BlogCard";
import BlogCardTwo from "./BlogCardTwo";

const Blogs = () => {
  const blogData = [
    {
      blogimg: "/blog-one.webp",
      blogdate: "27-02-2025",
      gategory: "Mobile App Development",
      blogtitle: "Empowering Your Vision with Custom Mobile App Development",
      blogdesc:
        "In today’s digital-first world, a compelling mobile presence is no longer a luxury, but a necessity.",
      url: "https://medium.com/@arnnima/arnnima-empowering-your-vision-with-custom-mobile-app-development-d06659da4f76",
    },
    {
      blogimg: "/blog-two.webp",
      blogdate: "25-02-2025",
      gategory: "SEO",
      blogtitle:
        "Craft an SEO-friendly",
      blogdesc:
        "Navigating Digital Transformation: How IT Consultancy Can Drive Your Business Growth",
      url: "https://medium.com/@arnnima/craft-an-seo-friendly-25546a437328",
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
      blogdate: "05-02-2025",
      gategory: "Software Testing",
      blogtitle: "How Arnnima Can Help Fulfill Google’s Policy for 20 Testers",
      url: "https://medium.com/@arnnima/how-arnnima-can-help-fulfill-googles-policy-for-20-testers-37883df9c3cf",
    },
  ];

  return (
    <>
      <div className="blog-container">
        <div className="blog-box">
          <div className="blog-head">
            <h3>
              Our Latest Blog<strong className="red-point">.</strong>
              {/* <GoDotFill className="doticon" /> */}
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
