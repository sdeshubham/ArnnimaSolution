import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blogimg, blogdate, gategory, blogtitle, blogdesc, url }) => {
  return (
    <div className="blog-cardBox">
      <Link href={url}>
        <div className="blogs-card blogOneBorder">
          <div>
            <Image
              className="testiPic"
              src={blogimg}
              alt="Business image"
              height={270}
              width={378}
              priority
            />
          </div>
          <div className="blogCardOneDetails">
            <div className="dateCategory">
              <p>{blogdate}</p>
              <p>{gategory}</p>
            </div>
            <h5>{blogtitle}</h5>
            <p className="blogOneDesc">{blogdesc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
