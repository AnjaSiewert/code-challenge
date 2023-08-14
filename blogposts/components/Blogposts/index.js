import Link from "next/link";
import { Fragment } from "react";

export default function Blogposts({ posts, formatDate }) {
    return (
        <>
        <ul> 
            {posts.map((post) => (
                <Fragment key={post.id}>
                    <Link href={`/blog/${post.id}`}>
                    <li>
                        <h2>{post.title}</h2>
                        <p><strong>Created on: </strong><br/>{formatDate(post.created)}</p>
                        <p><strong>Author: </strong><br />{post.author}</p>
                    </li>
                    </Link>
                </Fragment>
            ))}
        </ul>
        </>
    );
};