import { useState } from 'react';
import ShareButtons from "../ShareButtons";
import StyledButton from '../ShareButtons/ShareButtons';
import StyledParagraph from '../StyledParapraph';
import StyledImage from '../StyledImage';
import StyledDiv from "../StyledDiv";

export default function BlogpostDetails ({selectedPost, formatDate}) {
    if(!selectedPost) {
        return <h2>is loading...</h2>
    } 

    const [fullContent, setFullContent] = useState(false);

    function ShowFullContent() {
        setFullContent(!fullContent);
    }

    return (
        <>
            <StyledParagraph>
            <strong>Subtitle: </strong><br />
            {selectedPost.subtitle}
            </StyledParagraph>
            <StyledDiv>
                <StyledImage src={selectedPost.image} alt={selectedPost.title}/>
            </StyledDiv>
            <p><strong>Created: </strong><br/>{formatDate(selectedPost.created)}</p>
            <p><strong>Author: </strong><br />{selectedPost.author}</p>
            {fullContent ? <StyledParagraph>{selectedPost.content}</StyledParagraph> : <StyledParagraph>{selectedPost.content.substring(0, 500)}...</StyledParagraph>}
            <StyledButton onClick={ShowFullContent}>
            {fullContent ? 'Show less' : 'Show more'}
            </StyledButton>
            <StyledDiv $buttonContainer>
                <ShareButtons selectedPost={selectedPost}/>
            </StyledDiv>
        </>
    );
};