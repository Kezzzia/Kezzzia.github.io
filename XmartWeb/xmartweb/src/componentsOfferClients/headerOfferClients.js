import React from 'react';
import styled from 'styled-components';
import SlideView from '../componentsOfferClients/slider';
import NameAdvisor from '../componentsOfferClients/nameAdvisor';
import ButtonLike from '../sharedComponents/buttonLIke';


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const HeaderOfferClients = () => {
    return(
        <Wrapper>
            <ButtonLike />
            <NameAdvisor />
            <SlideView />
        </Wrapper>
    );
};
export default HeaderOfferClients;