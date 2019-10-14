import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: yellow;
    position: absolute;
    z-index: 1;
    width: 100%;
    margin-top: 10vh;

`;

const ButtonLike = ()=> {
    return (
        <Wrapper>
            <button>1</button>
        </Wrapper>
    )
}
export default ButtonLike;