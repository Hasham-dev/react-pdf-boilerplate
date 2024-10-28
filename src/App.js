import React, { useState } from "react";
import Preview from "./Components/PDF/Preview";
import BillOfLadingPDF from "./Components/PDF/Bill";
import { saveAs } from "file-saver";
import { PDFDownloadLink } from "@react-pdf/renderer";
function App() {
  return (
    <>
      <PDFDownloadLink document={<BillOfLadingPDF />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
      <BillOfLadingPDF />
    </>
  );
}

export default App;
