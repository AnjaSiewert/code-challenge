import useSWR from 'swr'

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
 
  const { data, error, isLoading } = useSWR('http://localhost:3001/rest/blogposts', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
    
  return (
    <>
      <Component 
      {...pageProps} 
      posts={data}
      />
    </>
   );
  }