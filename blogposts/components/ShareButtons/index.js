import { useState } from "react";
import StyledButton from "./ShareButtons";

export default function ShareButtons ({selectedPost}) {
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
       {isCopied && <p>Link copied to clipboard</p>}  
            <StyledButton onClick={handleShareLink}>Copy link to clipboard</StyledButton>
            <StyledButton onClick={handleShareWhatsApp}>Share via Whatsapp</StyledButton>
            <StyledButton onClick={handleShareMail}>Share via Mail</StyledButton>
    </>
);
};