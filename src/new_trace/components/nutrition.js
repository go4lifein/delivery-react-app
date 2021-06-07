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
                            {data.fat}%
                            </Text>
                           
                        </Card>
                        <Card background = "#bcd4bd">
                            <Title>
                                SNF
                            </Title>
                            <Text>
                            {data.snf}
                            </Text>
                          
                        </Card>
                        <Card background = "#FC9C9C">
                            <Title>
                                Sodium
                            </Title>
                            <Text>
                            {data.sodium_content}
                            </Text>
                           
                        </Card>
                        <Card background = "#d1d9dc">
                            <Title>
                                pH
                            </Title>
                            <Text>
                            {data.ph}
                            </Text>
                           
                        </Card>
                        <Card background = "#F4DC8C">
                            <Title>
                                MBRT
                            </Title>
                            <Text>
                                {data.mbrt}
                            </Text>
                            
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
    justify-content:center;
    margin:2%;
    display:flex;
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
    font-size:32px;
    display:flex;
    flex-direction:row;
    justify-items:center;
    align-items:center;
    @media (max-width:500px)
    {
        font-size:16px;
        font-weight:400;
    }
`;

const Text = styled.p`
    font-size:24px;
    font-weight:800;
    text-align:justify;
    @media (max-width:500px)
    {
        font-size:20px;
        font-weight:600;
    }
`;

