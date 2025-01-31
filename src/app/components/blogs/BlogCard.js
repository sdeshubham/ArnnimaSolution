import Image from "next/image";

const BlogCard = ({ blogimg, blogdate, gategory, blogtitle, blogdesc }) => {
  return (
    <>
      <div className="blog-cardBox">
        <div className="blogs-card">
          <div>
            <Image
              className="testiPic"
              src={blogimg}
              alt="Business image"
              height={50}
              width={50}
              priority
            />
          </div>
          <div>
            <p>{blogdate}</p>
            <p>{gategory}</p>
            <h5>{blogtitle}</h5>
            <p>{blogdesc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
