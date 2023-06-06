import Link from "next/link";
import Image from "next/image";
export default function BlogPost({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) {
  console.log(title, author, coverPhoto, datePublished, slug);
  return (
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg"
      style={{ padding: 10 }}
    >
      <img class="w-full" src={coverPhoto.url} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2" style={{ color: "black" }}>
          {title}
        </div>
        <p class="text-gray-700 text-base">{slug}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Post author {author.name}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Posted at {datePublished}
        </span>
      </div>
    </div>
  );
}

// <div className="card rounded-none">
//   <Link href={"/posts/" + slug}>
//     <div className={styles.imgcontainer}>
//       <img src={coverPhoto.url} alt="" />
//     </div>
//   </Link>
//   <div className="">
//     <h2>{title}</h2>
//     <div className="{styles.details}">
//       <div style={styles.author}>
//         <img src={author.avatar.url} alt="" />
//         <h3>{author.name}</h3>
//       </div>
//       <div className="{styles.date}">
//         <h3>{datePublished}</h3>
//       </div>
//     </div>
//   </div>
// </div>
