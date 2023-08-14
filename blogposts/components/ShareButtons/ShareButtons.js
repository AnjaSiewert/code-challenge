import styled from 'styled-components';

const StyledButton = styled.button`
    cursor: pointer;
    font-size: 0.8rem;
    height: 2rem;
    border: none;
    border-radius: 10px;
    color: white;
    background: #333;
    padding: 0.5rem 1rem;
    box-shadow: 0 0.2rem rgba(121,121,121, 0.65);
    
    &:hover {
        filter: brightness(130%);
        transform: scale(1.05);
    }
    `;

    export default StyledButton;