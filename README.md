# farbenmeer code challenge

Create a react application which shows a list of blog posts and additionally a blog detail page for each post.
You are free to choose the framework and tools yourself.
We provide a REST API and a GraphQL API ready for you to consume. You decide which you want to use.

# Goals 🏁

* Consume APIs and handle responses
* Handle states
* Handle routes between different pages

# Pre-requisites ✅

## Run the server

1. Checkout this repo
2. Go to `server` directory
3. Run `npm install`
4. Run `npm run start`
5. REST at: http://localhost:3001/rest GraphQL at: http://localhost:3001/graphql

## REST API documentation

| Method 	| Path               	| Notes                   	|  
|--------	|--------------------	|-------------------------	|
| get    	| /rest/blogposts    	| Get all blogposts       	|
| get    	| /rest/blogpost/:id 	| Get a specific blogpost 	| 

## GraphQL API documentation

Go to http://localhost:3001/graphql and click on "Docs" in the upper right cornor.


# Requirements 📖

1. There should be an overview page where the user can see all blog posts in short.
2. If the user clicks on one blog post they should see the full blog post.
3. The user should be able to send a link to a specific blog post to their friends.


# Think about 💡

There are no wrong choices! But keep in mind to argue later on why you have chosen the one or the other option.

* If you feel comfortable try to use TypeScript. If not no worries this is not mandatory.
* Using `npx create-react-app`, `npx create-next-app` or use your own?
* How do you use versioning to let others follow your thoughts?
* How do you ensure code quality?
