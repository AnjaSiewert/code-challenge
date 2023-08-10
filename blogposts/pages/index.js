import Blogposts from "@/components/Blogposts";
import Header from "@/components/Header";

export default function Page({posts}) {
  return (
  <>
  <Header headline="Blogposts" />
  <Blogposts posts={posts}/>
  </>
  )
}