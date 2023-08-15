import { blogposts } from "../data";

export default function handler(req, res) {
    if(req.method === 'GET') {
        res.status(200).json(blogposts);
    } else {
        res.status(400).json({message: 'Only GET requests are allowed'});
    }  
};