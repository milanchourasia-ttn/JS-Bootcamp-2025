import Link from "next/link";
import styles from "./style.module.css";

export default async function PostsPage() {
  const response = await fetch("https://dummyjson.com/posts?limit=5", {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return <div>Error fetching data...</div>;
  }

  const data = await response.json();

  return (
    <div className={`container pb-[100px] ${styles.textCenter}`}>
      <h1 className="text-center pt-[50px] font-extrabold text-[30px]">ISR using generate Static Params Page</h1>
      <ul className="list pt-[50px]">
        {data.posts.map((post) => (
          <li key={post.id} className={`mb-2 ${styles.item}`}>
              {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
