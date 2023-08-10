export default function Blogposts({ posts }) {
    return (
        <>
        <ul>
            {posts.map((post) => (
            <li key={post.id}>
                <h2>{post.title}</h2>
                <p>created on: {post.created}</p>
                <p>Author: {post.author}</p>
                </li>
            ))}
        </ul>
        </>
    );
};