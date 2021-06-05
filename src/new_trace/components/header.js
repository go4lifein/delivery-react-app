import styled from 'styled-components';
import logo from '../assets/g4l.svg';


export default function Header({data}){
    return(
        <Container>
            
            <Image src = {logo} alt = "logo" />
            <Title>
                Trace Your Milk
            </Title>
        </Container>
    );
}

const Container = styled.main`
    display : flex ; 
    justify-content:space-between;
    align-items:center;
    padding-top:1%;
    z-index:99;
    width: 90% ;
    @media (max-width:780px)
    {
        margin-top:0;
    }
 
`;


const Image = styled.img`
    @media (max-width:1080px)
    {
        width:100px;
        height:100px;
        margin-right:3%;
    }
    @media (max-width:500px){
        width:80px;
        height:80px;
        margin-right:8%;
    }
`;

const Title = styled.h2`
    font-weight:600;
    font-size:22px;

    @media (max-width:1080px)
    {
        font-size:16px;
    }
    @media (max-width:500px){
        font-size:12px;
    }
    @media (max-width:330px){
        font-size:10px;
    }

`;
