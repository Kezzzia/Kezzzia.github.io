import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import BookNow from './sharedComponents/bookNow';
import HeaderOfferClients from './componentsOfferClients/headerOfferClients';
import AboutAdviser from './componentsOfferClients/aboutAdvisor';

const Wrapper = styled.div`
    width: 100%;
`;

const WebOfferClientView = () => {

    return (
    <Wrapper>
        <HeaderOfferClients />
        <AboutAdviser />
        <BookNow />
    </Wrapper>
    );
}

ReactDom.render(<WebOfferClientView />, document.getElementById('root'));
