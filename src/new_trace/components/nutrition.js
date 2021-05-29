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
                        <Card background = "#d1d9dc">
                            <Title>
                                Fat
                            </Title>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Text>
                            <Circle back =" #86969c">
                                    3.67%
                            </Circle>
                        </Card>
                        <Card background = "#d1d9dc">
                            <Title>
                                SNF
                            </Title>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Text>
                            <Circle back =" #86969c">
                                    8.87%
                            </Circle>
                        </Card>
                        <Card background = "#d1d9dc">
                            <Title>
                                Sodium
                            </Title>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Text>
                            <Circle back =" #86969c">
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
                            <Circle back =" #86969c">
                                    6.7
                            </Circle>
                        </Card>
                        <Card background = "#d1d9dc">
                            <Title>
                                MBRT
                            </Title>
                            <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </Text>
                            <Circle back =" #86969c">
                                    40mins
                            </Circle>
                        </Card>
                </Cards>
            
        </Container>
    );
}

const Container = styled.main`
    width : 100% ; 
    height:100vh;
    display: flex ; 
    flex-direction :column;
    justify-content:flex-start;
    align-items:center;
    margin-top:-1.1%;
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
    @media (max-width:500px)
    {
      padding-left:10%;

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
    background:yellow;
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
