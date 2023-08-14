import styled, {css} from 'styled-components';
import ShareButtons from "../ShareButtons";
import { useState } from 'react';
import StyledButton from '../ShareButtons/ShareButtons';

const StyledParagraph = styled.p`
    margin: 2rem;
`;

const StyledImage = styled.img`
    width: 50%;`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    ${(props) =>
    props.$buttonContainer &&
    css`
    flex-direction: column;  
    align-items: center;  
    gap: 0.5rem;
    margin: 3rem 0 1rem 0;
    `}
    `;

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
            <p>
            <strong>Subtitle: </strong><br />
            {selectedPost.subtitle}
            </p>
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