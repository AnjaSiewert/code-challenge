import styled, {css} from 'styled-components';
import ShareButtons from "../ShareButtons";

const StyledImage = styled.img`
    width: 50%;`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    ${(props) =>
    props.buttonContainer &&
    css`
    flex-direction: column;  
    align-items: center;  
    gap: 0.5rem;
    margin-bottom: 1rem;
    `}
    `;

export default function BlogpostDetails ({selectedPost, formatDate}) {
    if(!selectedPost) {
        return <h2>is loading...</h2>
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
            <p>{selectedPost.content}</p>
            <p><strong>Author: </strong><br />{selectedPost.author}</p>
            <StyledDiv buttonContainer>
            <ShareButtons selectedPost={selectedPost}/>
            </StyledDiv>
        </>
    );
};