import { blogposts } from "../data";

export default function handler(req, res) {
    const { id } = req.query;

    if(req.method === 'GET') {
        const post = blogposts.find((post) => post.id === id);
        res.status(200).json(post);
    } else {    
        res.status(404).json({message: 'Blogpost not found'});
    }
};