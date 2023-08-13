import { useState } from "react";

export default function BlogpostDetails ({selectedPost, formatDate}) {
    if(!selectedPost) {
        return <h2>is loading...</h2>
    } 

    const [isCopied, setIsCopied] = useState(false);

function handleShareLink() {
    const shareUrl = `${window.location.origin}/blog/${selectedPost.id}`;
    navigator.clipboard.writeText(shareUrl);
    setIsCopied(true);
    setTimeout(() => { setIsCopied(false)}, 3000);
};

function handleShareWhatsApp() { 
    const shareUrl = `${window.location.origin}/blog/${selectedPost.id}`;
    const shareText = `Check out this blogpost: ${selectedPost.title}`;
    window.open(`whatsapp://send?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`);
};

    return (
        <>
            <p>subtitle: {selectedPost.subtitle}</p>
            <img src={selectedPost.image} alt={selectedPost.title}/>
            <p>created: {formatDate(selectedPost.created)}</p>
            <p>{selectedPost.content}</p>
            <p>Author: {selectedPost.author}</p>
            {isCopied && <p>Link copied to clipboard</p>}  
            <button onClick={handleShareLink}>Share with friends</button>
            <button onClick={handleShareWhatsApp}>Share via Whatsapp</button>
        </>
    );
};