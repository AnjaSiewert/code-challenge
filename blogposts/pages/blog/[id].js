import Header from "@/components/Header";

export default function BlogpostDetailsPage ({selectedPost, formatDate}) {
    if(!selectedPost) {
        return <h2>is loading...</h2>
    }

    return (
        <>
        <Header headline={selectedPost.title}/>
        <p>subtitle: {selectedPost.subtitle}</p>
        <img src={selectedPost.image} alt={selectedPost.title}/>
        <p>created: {formatDate(selectedPost.created)}</p>
        <p>{selectedPost.content}</p>
        <p>Author: {selectedPost.author}</p>
        </>
    )
};
