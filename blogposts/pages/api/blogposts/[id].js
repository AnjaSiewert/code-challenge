import { blogposts } from "../data";

export default function handler(req, res) {
    const { id } = req.query;

    if(req.method === 'GET') {
        const post = blogposts.find((post) => post.id === id);
        if(!post) {
            return res.status(404).json({message: 'Blogpost not found'});
    } else {    
        res.status(200).json(post);
    }
} else {
    res.status(405).end();
}
};