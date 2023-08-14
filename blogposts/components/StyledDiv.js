import styled, {css} from 'styled-components';

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

export default StyledDiv;