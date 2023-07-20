import { pdf } from "@react-pdf/renderer";
import { Button } from "antd";
import React from "react";
import Invoice from "./Invoice";

const InvoiceButton = () => {
  const invoiceData = [];
  const handleDownloadPdf = async () => {
    const doc = <Invoice data={invoiceData} />;
    const blob = await pdf(doc).toBlob();
    const blobURL = URL.createObjectURL(blob);

    const iframe = document.createElement("iframe");
    document.body.appendChild(iframe);

    iframe.style.display = "none";
    iframe.src = blobURL;
    iframe.onload = () => {
      iframe.focus();
      if (iframe.contentWindow) {
        iframe.contentWindow.print();
      }
    };
  };
  return (
    <div>
      <Button onClick={handleDownloadPdf}>Download</Button>
    </div>
  );
};

export default InvoiceButton;
