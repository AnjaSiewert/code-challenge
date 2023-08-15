import Blogposts from "@/components/Blogposts";
import Header from "@/components/Header";

export default function Page({posts, formatDate}) {
  return (
  <>
  <Header headline="Wanderlust chronicles" />
  <Blogposts posts={posts} formatDate={formatDate}/>
  </>
  )
}