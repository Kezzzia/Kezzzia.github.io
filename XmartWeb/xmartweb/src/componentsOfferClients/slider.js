import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Barsa1 from '../img/imgOfferClients/rectangle@3x.png';
import Barsa2 from '../img/imgOfferClients/barcelona2.jpg';
import Barsa3 from '../img/imgOfferClients/barcelona3.jpg';

const Wrapper = styled.div`
    width: 100%;
    min-width: 320px;
`;

const Page = styled.div`
    img{
        object-fit: cover;
        width: 100%;
        height: 60vh;
    }
`;

export default class SlideView extends React.Component{
    render(){
        return(
            <Wrapper>
                <Slider
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={false}
                    dots={true}
                >
                    <Page>
                        <img src={Barsa1} />
                    </Page>
                    <Page>
                        <img src={Barsa2} />
                    </Page>
                    <Page>
                        <img src={Barsa3} />
                    </Page>
                </Slider>
            </Wrapper>
        );
    }
}
