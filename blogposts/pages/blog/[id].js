import BlogpostDetails from "@/components/BlogpostDetails";
import Header from "@/components/Header";
import Link from "next/link";

export default function BlogpostDetailsPage ({selectedPost, formatDate}) {
    if(!selectedPost) {
        return <h2>is loading...</h2>
    } 
    
    return (
        <>
        <Link href="/">Back to Blog</Link>
        <Header headline={selectedPost.title}/>
        <BlogpostDetails selectedPost={selectedPost} formatDate={formatDate}/>
        </>
    )
};
