import '../styles/global.css';
import useSWR from 'swr'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
 
  const router = useRouter();
  const { id } = router.query;
  // console.log("router.query:",router.query);

  const { data, error, isLoading } = useSWR(
    id 
    ? `http://localhost:3001/rest/blogpost/${id}`
    :'http://localhost:3001/rest/blogposts', 
    fetcher
    );
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  const selectedPost = Array.isArray(data) ? data.find(post => post.id === id) : data;
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: 'numeric', second: 'numeric'};
    return new Date(dateString).toLocaleDateString('en-US', options);
  }

  return (
    <>
      <Component 
      {...pageProps} 
      posts={data}
      selectedPost={selectedPost}
      formatDate={formatDate}
      />
    </>
   );
  }