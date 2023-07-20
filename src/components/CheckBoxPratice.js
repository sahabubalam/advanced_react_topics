import React, { useEffect, useState } from "react";
import { Checkbox, Row, Col, Button } from "antd";

const CheckBoxPratice = () => {

    const all = [
        { id: 1, name: "apple", status: 0 },
        { id: 2, name: "orange", status: 0 },
        { id: 3, name: "banana", status: 1 },
        { id: 4, name: "mango", status: 0 },
        { id: 5, name: "jackfruit", status: 0 },
        { id: 7, name: "mackfruit", status: 0 },
      ];

      const [selectedIds, setSelectedIds] = useState(
        all.filter((item) => item.status === 1).map((item) => item.id)
      );
      const [selectedInactiveIds, setSelectedInactiveIds] = useState(
        all.filter((item) => item.status === 0).map((item) => item.id)
      );
      const [selectAll, setSelectAll] = useState(false);
      const [selectInactiveAll, setSelectInactiveAll] = useState(false);
    
      console.log({selectedIds});
      console.log({selectedInactiveIds});
    
      const handleCheckboxChange = (id) => {
        if (selectedIds.includes(id)) {
          setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
          setSelectAll(false);
        } else {
          setSelectedIds([...selectedIds, id]);
          if (selectedIds.length + 1 === all.length) {
            setSelectAll(true);
          }
        }
      };
      const handleSelectAllChange = () => {
        if (selectAll) {
          setSelectedIds([]);
          setSelectAll(false);
        } else {
          setSelectedIds(all.map((item) => item.id));
          setSelectAll(true);
        }
      };
    
      const handleInactiveCheckboxChange = (id) =>{
        if (selectedInactiveIds.includes(id)) {
            setSelectedInactiveIds(selectedInactiveIds.filter((selectedId) => selectedId !== id));
            setSelectInactiveAll(false);
          } else {
            setSelectedInactiveIds([...selectedInactiveIds, id]);
            if (selectedInactiveIds.length + 1 === all.length) {
                setSelectInactiveAll(true);
            }
          }
      }
    
      const handleSelectInactiveAllChange = () => {
        if (selectInactiveAll) {
            setSelectedInactiveIds([]);
            setSelectInactiveAll(false);
        } else {
            setSelectedInactiveIds(all.map((item) => item.id));
            setSelectInactiveAll(true);
        }
      };
    
      useEffect(() => {
        setSelectedIds(
          all.filter((item) => item.status === 1).map((item) => item.id)
        );
      }, []);
    
      useEffect(() => {
        setSelectedInactiveIds(
          all.filter((item) => item.status === 0).map((item) => item.id)
        );
      }, []);
    return (
        <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>SI</th>
              <th>Name</th>
              <th>Status</th>
              <th>
                <button
                  onClick={handleSelectAllChange}
                  className="btn btn-sm btn-secondary"
                >
                  {selectAll ? "Unselect All" : "Select All"}
                </button>
              </th>
              <th>
                <button
                  onClick={handleSelectInactiveAllChange}
                  className="btn btn-sm btn-secondary"
                >
                  {selectInactiveAll ? "Unselect All" : "Select All"}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {all.map((d, index) => {
              return (
                <tr key={d.id}>
                  <td>{index + 1}</td>
                  <td>{d.name}</td>
                  <td>{d.status}</td>
                  <td>
                    <Checkbox
                      key={d.id}
                      checked={selectedIds.includes(d.id)}
                      onChange={() => handleCheckboxChange(d.id)}
                    >
                      {/* {d.name} */}
                    </Checkbox>
                  </td>
                  <td>
                    <Checkbox
                      key={d.id}
                      checked={selectedInactiveIds.includes(d.id)}
                      onChange={() => handleInactiveCheckboxChange(d.id)}
                    >
                      {/* {d.name} */}
                    </Checkbox>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
};

export default CheckBoxPratice;