// import Image from "next/image";

// const BlogCard = ({ blogimg, blogdate, gategory, blogtitle, blogdesc }) => {
//   return (
//     <>
//       <div className="blog-cardBox">
//         <a href="/">
//           <div className="blogs-card blogOneBorder">
//             <div>
//               <Image
//                 className="testiPic"
//                 src={blogimg}
//                 alt="Business image"
//                 height={50}
//                 width={50}
//                 priority
//               />
//             </div>
//             <div className="blogCardOneDetails">
//               <div className="dateCategory">
//                 <p>{blogdate}</p>
//                 <p>{gategory}</p>
//               </div>
//               <h5>{blogtitle}</h5>
//               <p className="blogOneDesc">{blogdesc}</p>
//             </div>
//           </div>
//         </a>
//       </div>
//     </>
//   );
// };

// export default BlogCard;





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
              height={50}
              width={50}
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
