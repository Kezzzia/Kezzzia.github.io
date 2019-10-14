import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.div`
    width: 100%;
    left: 0;
    bottom: 0;
    position: fixed;
    font-size: calc(1rem + .3vw);
    padding: 0.5em 0;
    text-align: center;
    background-color: #239dff;
`;

const StyleLink = styled.a`
    color: white;
    font-family: roboto, sans-serif;
    text-transform: uppercase;
`;

const BookNow = () => {
    return (
        <StyleButton>
            <StyleLink href='#'>book now</StyleLink>
        </StyleButton>
    );
};

export default BookNow;