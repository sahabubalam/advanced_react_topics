import React from "react";
import { write, utils } from "xlsx";
import { saveAs } from "file-saver";
import CommonLayout from "./CommonLayout";

const ExportXlsx = () => {
  const exportToXLSX = (data) => {
    const worksheet = utils.json_to_sheet(data);
    const workbook = {
      SheetNames: ["Sheet1"],
      Sheets: {
        Sheet1: Object.assign({}, worksheet, {
          "!cols": [{ width: 20 }, { width: 20 }],
        }),
      },
    };

    const fileBuffer = write(workbook, { bookType: "xlsx", type: "buffer" });
    saveAs(
      new Blob([fileBuffer], { type: "application/octet-stream" }),
      "data.xlsx"
    );
  };

  const data = [
    {
      id: 1,
      aircraftModelName: "ATR72-600",
      aircraftName: "ATR-11",
      airframeSerial: "3443",
    },
    {
      id: 2,
      aircraftModelName: "aircraft-model1",
      aircraftName: "ATB-113",
      airframeSerial: "4443",
    },
    {
      id: 3,
      aircraftModelName: "ATR72-600",
      aircraftName: "C-234344",
      airframeSerial: "333",
    },
    {
      id: 4,
      aircraftModelName: "ATR72-600",
      aircraftName: "b-2343443",
      airframeSerial: "44435",
    },
    {
      id: 5,
      aircraftModelName: "ATR72-600",
      aircraftName: "ATC-1134",
      airframeSerial: "444322",
    },
    {
      id: 6,
      aircraftModelName: "ATR72-600",
      aircraftName: "D-9022222",
      airframeSerial: "82992",
    },
    {
      id: 7,
      aircraftModelName: "ATR72-600",
      aircraftName: "F-23434434",
      airframeSerial: "44433",
    },
    {
      id: 8,
      aircraftModelName: "ATR72-600",
      aircraftName: "ATR-11345",
      airframeSerial: "44434",
    },
    {
      id: 9,
      aircraftModelName: "ATR72-600",
      aircraftName: "ATR-114",
      airframeSerial: "10123",
    },
    {
      id: 11,
      aircraftModelName: "ATR72-600",
      aircraftName: "ATR-1139999",
      airframeSerial: "444333",
    },
  ];

  return (
    <CommonLayout>
      <div>
        <button onClick={() => exportToXLSX(data)}>Export Data</button>
      </div>
    </CommonLayout>
  );
};

export default ExportXlsx;
