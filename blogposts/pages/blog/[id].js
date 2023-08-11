import Header from "@/components/Header";

export default function BlogpostDetailsPage ({selectedPost}) {
    if(!selectedPost) {
        return <h2>is loading...</h2>
    }

    return (
        <>
        <Header headline="Blogpost"/>
        <h1>{selectedPost.title}</h1>
        <p>subtitle: {selectedPost.subtitle}</p>
        <img src={selectedPost.image} alt={selectedPost.title}/>
        <p>created: {selectedPost.created}</p>
        <p>{selectedPost.content}</p>
        <p>Author: {selectedPost.author}</p>
        </>
    )
};
