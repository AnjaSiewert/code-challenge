import Link from "next/link";

export default function Blogposts({ posts, formatDate }) {
    return (
        <>
        <ul> 
            {posts.map((post) => (
                <Link href={`/blog/${post.id}`}>
            <li key={post.id}>
                <h2>{post.title}</h2>
                <p>created on: {formatDate(post.created)}</p>
                <p>Author: {post.author}</p>
                </li>
                </Link>
            ))}
        </ul>
        </>
    );
};