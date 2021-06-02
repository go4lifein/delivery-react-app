import styled from 'styled-components';
import { useState } from 'react';
import { Document , Page ,pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Pdf({data}){
    const [numPages , setNumPages ] = useState(null);
    const [pageNumber, setPageNumber ] = useState(1);


    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
    }

    console.log(data.pdf_url);
    return(
        <Container>
          <Doc>
          <Document
            file = {data.pdf_url}
            onLoadSuccess = {onDocumentLoadSuccess}
          >
            <Page size = "A4" pageNumber = { pageNumber} />
          </Document>
            <p>Page {pageNumber} of {numPages}</p>

          </Doc>
          
        </Container>
    );
}

const Container = styled.main`
     width : 100% ; 
    display: flex ; 
    flex-direction : column ;
    justify-content: center;
    align-items:center;
    padding-top:5%;
    margin-top:-0.8%;
    background:rgb(245,245,245);
    
    transition:all 0.5s;
    
    @media (max-width:500px){
       margin-top:-2.5%;
    }
`;

const Doc = styled.div`
  display:flex;
  width:100%;
  height:100%;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  @media (max-width:800px)
  {
    width:50%;
    height:50%;
  }
  
`;