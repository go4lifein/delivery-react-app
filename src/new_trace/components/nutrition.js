import styled from 'styled-components';
import Fade from 'react-reveal';


export default function Nutrition({data}){
    return(
        <Container>
        
                <Header>
                    <Heading>
                        Nutritional Facts
                    </Heading>
                </Header>
                <Cards>
                        <Card background = "#F19440">
                            <Title>
                                Fat
                            </Title>
                            <Text>
                           Saturated 'Fat' increases 'good' cholesterol levels in our body, which protects our health.
                            </Text>
                            <Circle back ="#000">
                                    3.67%
                            </Circle>
                        </Card>
                        <Card background = "#B4D4BC">
                            <Title>
                                SNF
                            </Title>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Text>
                            <Circle back =" #000">
                                    8.87%
                            </Circle>
                        </Card>
                        <Card background = "#FC9C9C">
                            <Title>
                                Sodium
                            </Title>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Text>
                            <Circle back =" #000">
                                    NA
                            </Circle>
                        </Card>
                        <Card background = "#d1d9dc">
                            <Title>
                                pH
                            </Title>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Text>
                            <Circle back =" #000">
                                    6.7
                            </Circle>
                        </Card>
                        <Card background = "#F4DC8C">
                            <Title>
                                MBRT
                            </Title>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Text>
                            <Circle back =" #000">
                                    40mins
                            </Circle>
                        </Card>
                </Cards>
            
        </Container>
    );
}

const Container = styled.main`
    width : 100% ; 
    display: flex ; 
    flex-direction :column;
    justify-content:flex-start;
    align-items:center;
    margin-top:-0.8%;
    padding-bottom:5%;
    padding-top:3%;

    transition:all 0.5s;
    background:rgb(245,245,245);
    
    @media (max-width:500px){
       margin-top:-2.5%;
    }
`;

const Header = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:row;
    width:100%;
   
`;
const Heading = styled.div`
    font-weight:600;
    width:100%;
    text-align:left;
    padding-left:7%;
    display:flex;
    flex-direction:row;
    font-size:26px;
    @media (max-width:500px)
    {
        font-size:12px;
    }
    @media (max-width:600px){
        padding-left:12%;
    }
`;

const Cards = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    padding-top:5%;
    flex-wrap:wrap;
    padding-left:5%;
    justify-content:flex-start;
    align-items:center;
    @media (max-width:1100px)
    {
        padding-left:10%;
    }
    @media (max-width:800px)
    {
        padding-left:17%;

    }
    @media (max-width:600px){
        padding-left:13%;
    }
    @media (max-width:400px)
    {
        padding-left:10%;
    }
    @media (max-width:330px)
    {
        padding-left:5%;
    }
`;

const Card = styled.div`
    width:280px;
    height:280px;
    border-radius:15px;
    align-items:center;
    flex-direction:column;
    justify-content:flex-start;
    position:relative;
    margin:2%;
    display:block;
    padding:3%;
    align-items:center;
    background:${props =>props.background};
    @media (max-width:1100px){
        height:230px;
        width:230px;
    }
    @media (max-width:500px)
    {
        height:150px;
        width:150px;
    }
    @media (max-width:400px){
        height:130px;
        width:130px;
    }
`;

const Title = styled.div`
    font-weight:600;
    font-size:22px;
    display:flex;
    flex-direction:row;
    justify-items:center;
    @media (max-width:500px)
    {
        font-size:12px;
    }
`;

const Text = styled.p`
    font-size:14px;
    text-align:justify;
    @media (max-width:500px)
    {
        font-size:8px;
    }
`;

const Circle = styled.div`
    display:flex;
    position:absolute;
    color:white;
    justify-content:center;
    align-items:center;
    border-radius:50px;
    width:60px;
    height:60px;
    bottom:0;
    right:0;
    margin-right:5%;
    margin-bottom:5%;
    background:${props =>props.back};
    font-weight:600;
    @media (max-width:500px)
    {
        width:35px;
        height:35px;
        font-size:8px;
    }
   
`;
