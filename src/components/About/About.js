import React, { useState, Fragment } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./About.scss";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};

const About = () => {
  const [numPages, setNumPages] = useState(null);
  const [file, setFile] = useState("./Report.pdf");

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="Example">
      <div className="Example__container">
        <div className="Example__container__document">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Fragment key={`page_${index + 1}`}>
                <Page pageNumber={index + 1} />
                <p className="textWhite">{`${index + 1}`}</p>
              </Fragment>
            ))}
          </Document>
        </div>
      </div>

      {file && <div className=""></div>}
    </div>
  );
};

export default About;
