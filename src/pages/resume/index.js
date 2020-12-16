import React, { Component } from "react";
import { Container, ListGroup } from "reactstrap";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../data/dummy.pdf";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default class Resume extends Component {
  state = {
    numPages: null,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { numPages } = this.state;
    
    return (
      <Container className="resume-container">
        <Header />
        <h1 id="title">Resume</h1>

        <Document
          classname="mt-5"
          file={pdf}
          onLoadSuccess={this.onDocumentLoadSuccess}
          onLoadError={console.error}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={700}
            />
          ))}
        </Document>
        <Footer />
      </Container>
    );
  }
}