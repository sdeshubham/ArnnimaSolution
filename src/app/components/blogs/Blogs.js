import { GoDotFill } from "react-icons/go";
import "./Blogs.css";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogData = [
    {
      blogimg: "/Images/blog-one.png",
      blogdate: "08/11/2021",
      gategory: "Category",
      blogtitle: "Believing neglected so so allowance existence departure.",
      blogdesc:
        "Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.",
    },
    {
      blogimg: "/Images/blog-two.png",
      blogdate: "08/11/2021",
      gategory: "Category",
      blogtitle:
        "In design active temper be uneasy. Thirty for remove plenty regard you.",
      blogdesc:
        "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.",
    },
  ];

  const blogtwoData = [
    {
      blogDate: "08/11/2021",
      category: "Category",
      blogTitle:
        "In design active temper be uneasy. Thirty for remove plenty regard you.",
      blogDesc:
        "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.",
    },
  ];

  return (
    <>
      <div className="blog-box">
        <div className="blog-head">
          <h3>
            Our Latest Blog
            <GoDotFill className="doticon" />
          </h3>
          <button className="blog-btn">See All Blog Posts</button>
        </div>

        <div className="blog-cards-box">
          <div className="blogBoxOne">
            {blogData.map((blog, index) => (
              <BlogCard
                key={index}
                blogimg={blog.blogimg}
                blogdate={blog.blogdate}
                gategory={blog.gategory}
                blogtitle={blog.blogtitle}
                blogdesc={blog.blogdesc}
              />
            ))}
          </div>

          <div className="blog-box-Two">
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
