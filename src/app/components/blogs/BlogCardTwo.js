import Link from "next/link";

const BlogCardTwo = ({ blogdate, gategory, blogtitle, blogdesc, url }) => {
  return (
    <div className="blogTwoCardBox">
      <Link href={url}>
        <div className="blogTwoDetails">
          <div className="date-category">
            <p className="blog-right-date">{blogdate}</p>
            <p className="blog-right-category">{gategory}</p>
          </div>
          <h5 className="blogPartTwoTitle">{blogtitle}</h5>
          {/* <p className="blogOneDesc">{blogdesc}</p> */}
        </div>
      </Link>
    </div>
  );
};

export default BlogCardTwo;
