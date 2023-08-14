import styled from 'styled-components';
import ShareButtons from "../ShareButtons";

const StyledImage = styled.img`
    width: 50%;`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;`;

export default function BlogpostDetails ({selectedPost, formatDate}) {
    if(!selectedPost) {
        return <h2>is loading...</h2>
    } 

    return (
        <>
            <p>subtitle: {selectedPost.subtitle}</p>
            <StyledDiv>
            <StyledImage src={selectedPost.image} alt={selectedPost.title}/>
            </StyledDiv>
            <p>created: {formatDate(selectedPost.created)}</p>
            <p>{selectedPost.content}</p>
            <p>Author: {selectedPost.author}</p>
            <ShareButtons selectedPost={selectedPost}/>
        </>
    );
};