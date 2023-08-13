import { useState } from "react";

export default function BlogpostDetails ({selectedPost, formatDate}) {
    if(!selectedPost) {
        return <h2>is loading...</h2>
    } 

    const [isCopied, setIsCopied] = useState(false);

    const shareUrl = `${window.location.origin}/blog/${selectedPost.id}`;   
    const shareText = `Check out this blogpost: ${selectedPost.title}`;

function handleShareLink() {
    navigator.clipboard.writeText(shareUrl);
    setIsCopied(true);
    setTimeout(() => { setIsCopied(false)}, 3000);
};

function handleShareWhatsApp() { 
    window.open(`whatsapp://send?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`);
};

function handleShareMail() {
    window.open(`mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareUrl)}`);
};

    return (
        <>
            <p>subtitle: {selectedPost.subtitle}</p>
            <img src={selectedPost.image} alt={selectedPost.title}/>
            <p>created: {formatDate(selectedPost.created)}</p>
            <p>{selectedPost.content}</p>
            <p>Author: {selectedPost.author}</p>
            {isCopied && <p>Link copied to clipboard</p>}  
            <button onClick={handleShareLink}>Copy link to clipboard</button>
            <button onClick={handleShareWhatsApp}>Share via Whatsapp</button>
            <button onClick={handleShareMail}>Share via Mail</button>
        </>
    );
};