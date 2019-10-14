import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    z-index: 1;
    display: flex;
    height: 50px;
    position: absolute;
    color: #fff;
    width: 95%;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 40vh;
    text-align: end;
    span:first-child{
        font-size: calc(1rem + 0.8vw);
    }
    span{
        font-size: calc(.6rem + 0.7vw);

    }
    a{
        border-radius: 50%;
        background-color: red;
        text-decoration: none;
        color: #fff;
        height: 60px;
        width: 60px;
    }
`;
const WrapperBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 1em;
`;
const NameAdvisor = () => {
    return (
        <Wrapper>
            <WrapperBlock>
                <span>Visit Barcelona</span>
                <span>Travel Agency</span>
            </WrapperBlock>
            <WrapperBlock>
                <a href='#' ></a>
            </WrapperBlock>
        </Wrapper>
    )
}

export default NameAdvisor;