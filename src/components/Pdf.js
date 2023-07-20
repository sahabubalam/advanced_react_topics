import { Button } from "antd";
import React, { useState } from "react";
import TestPDF from "./TestPDF";
import { pdf } from "@react-pdf/renderer";
import CommonLayout from "./CommonLayout";

const Pdf = () => {
  const data = [
    {
      id: 36,
      aircraftId: 1,
      aircraftName: "S2-AKG",
      workShopMaint: null,
      woNo: "1/2/2023/16",
      date: "2023-03-14",
      totalAcHours: 55.34,
      totalAcLanding: 52,
      tsnComp: null,
      tsoComp: null,
      airframeSerial: "1",
      asOfDate: "2023-02-19",
      woTaskViewModelList: [
        {
          id: 1,
          workOrderId: 36,
          slNo: 1,
          description:
            "lorem ipsum lorem ipsum accomplishment of job same is to be returned to originator",
          workCardNo: "2223233",
          complianceDate: "2023-03-14",
          accomplishDate: "2023-03-14",
          authNo: "23",
          remarks: "23",
        },
        {
          id: 2,
          workOrderId: 36,
          slNo: 2,
          description:
            "lorem ipsum accomplishment of job same is to be returned to originator",
          workCardNo: "3434",
          complianceDate: "2023-03-14",
          accomplishDate: "2023-03-14",
          authNo: "2",
          remarks: "3",
        },
        {
          id: 3,
          workOrderId: 36,
          slNo: 3,
          description: `lorem ipsum lorem ipsum accomplishment of job same is to be returned to originator.
               .lorem ipsum lorem ipsum accomplishment of job 
               .same is to be returned to originator`,
          workCardNo: "2223233",
          complianceDate: "2023-03-14",
          accomplishDate: "2023-03-14",
          authNo: "23",
          remarks: "23",
        },
        {
          id: 4,
          workOrderId: 36,
          slNo: 4,
          description:
            "lorem ipsum accomplishment of job same is to be returned to originator.lorem ipsum lorem ipsum accomplishment of job same is to be returned to originator",
          workCardNo: "3434",
          complianceDate: "2023-03-14",
          accomplishDate: "2023-03-14",
          authNo: "2",
          remarks: "3",
        },
      ],
    },
    {
      id: 36,
      aircraftId: 1,
      aircraftName: "S2-AKG",
      workShopMaint: null,
      woNo: "1/2/2023/16",
      date: "2023-03-14",
      totalAcHours: 62.34,
      totalAcLanding: 52,
      tsnComp: null,
      tsoComp: null,
      airframeSerial: "1",
      asOfDate: "2023-02-19",
      woTaskViewModelList: [
        {
          id: 1,
          workOrderId: 36,
          slNo: 1,
          description:
            "accomplishment of job same is to be returned to originator",
          workCardNo: "2223233",
          complianceDate: "2023-03-14",
          accomplishDate: "2023-03-14",
          authNo: "23",
          remarks: "23",
        },
        {
          id: 2,
          workOrderId: 36,
          slNo: 2,
          description:
            "accomplishment of job same is to be returned to originator",
          workCardNo: "3434",
          complianceDate: "2023-03-14",
          accomplishDate: "2023-03-14",
          authNo: "2",
          remarks: "3",
        },
      ],
    },
  ];

  const handleDownloadPdf = async () => {
    const doc = <TestPDF data={data} />;
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
      <CommonLayout>
        <Button onClick={handleDownloadPdf}>Download</Button>
      </CommonLayout>
    </div>
  );
};

export default Pdf;
