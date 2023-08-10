function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: 'numeric', second: 'numeric'};
    return new Date(dateString).toLocaleDateString('en-US', options);
}

export default function Blogposts({ posts }) {
    return (
        <>
        <ul>
            {posts.map((post) => (
            <li key={post.id}>
                <h2>{post.title}</h2>
                <p>created on: {formatDate(post.created)}</p>
                <p>Author: {post.author}</p>
                </li>
            ))}
        </ul>
        </>
    );
};