import Link from "next/link";

export default function Blogposts({ posts, formatDate }) {
    return (
        <>
        <ul> 
            {posts.map((post) => (
                <Link href={`/blog/${post.id}`}>
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p><strong>Created on: </strong><br/>{formatDate(post.created)}</p>
                    <p><strong>Author: </strong><br />{post.author}</p>
                </li>
                </Link>
            ))}
        </ul>
        </>
    );
};