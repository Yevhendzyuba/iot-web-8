import React, {useContext, useState} from "react";
import {Container, CardWrapper} from "../../components/Global.styled";
import {
    IntroWrapper,
    IntroLogo,
    IntroText,
    IntroTextTitle,
    IntroTextDescription,
    CardButtonWrapper
} from "./Home.styled";
import CosmetologyIcon from "../../icons/homepage_logo.jpg";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Cosmetology from "../../components/Cosmetology";


function Home() {

    const cosmetologyBuilds = useContext(Cosmetology)
    const [showMore, setShowMoreState] = useState({showMoreItems: false})

    function handleSetShowMoreState() {
        setShowMoreState({showMoreItems: true})
    }

    const itemsToShow = showMore.showMoreItems ? cosmetologyBuilds.length : 5

    return (
        <Container>
            <IntroWrapper>
                <IntroLogo src={CosmetologyIcon} alt="CosmetologyLogoIntro"/>
                <IntroText>
                    <IntroTextTitle>Ella Bella Cosmetology</IntroTextTitle>
                    <IntroTextDescription>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.<br/> Dignissimos
                        et expedita iure minus
                        temporibus. Asperiores blanditiis<br/> corporis dolore earum fugit laudantium nam perspiciatis,
                        reiciendis<br/> repellendus unde. Atque delectus exercitationem
                        ratione.</IntroTextDescription>
                </IntroText>
            </IntroWrapper>
            <CardWrapper>
                {cosmetologyBuilds.slice(0, itemsToShow).map((cosmetologyBuild) => {
                    return (
                        <Card cosmetologyBuild={cosmetologyBuild}/>
                    )
                })}
            </CardWrapper>
            <CardButtonWrapper>
                <Button buttonText="View more" backgroundColor="#ffb6c1" color="#fff" fontSize="16" padding="17px 50px" border="none"
                        onClick={() => handleSetShowMoreState()}/>
            </CardButtonWrapper>
        </Container>

    );
}


export default Home;