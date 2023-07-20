import { Button, Col, Input, Row, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { useEffect, useState } from "react";
import CommonLayout from "./CommonLayout";

const DynamicField = () => {
  const [inputFields, setInputFields] = useState([
    { value: "", editable: true },
  ]);

  console.log({ inputFields });

  const handleAddField = () => {
    const newFields = [
      { field1: "", field2: "", field3: "", field4: "", editable: true },
    ];
    setInputFields([...inputFields, ...newFields]);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const handleEditField = (index) => {
    const values = [...inputFields];
    values[index].editable = true;
    setInputFields(values);
  };

  const handleSaveField = (index) => {
    const values = [...inputFields];
    values[index].editable = false;
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <CommonLayout>
      <div style={{ marginLeft: "200px" }}>
        {inputFields.map((field, index) => (
          <div key={index}>
            <Input
              placeholder="Enter a value"
              value={field.field1}
              onChange={(event) => handleInputChange(index, event, "field1")}
              style={{ width: "20%" }}
            />
            <Input
              placeholder="Enter a value"
              value={field.field2}
              onChange={(event) => handleInputChange(index, event, "field2")}
              style={{ width: "20%" }}
            />
            <Input
              placeholder="Enter a value"
              value={field.field3}
              onChange={(event) => handleInputChange(index, event, "field3")}
              style={{ width: "20%" }}
            />
            <Input
              placeholder="Enter a value"
              value={field.field4}
              onChange={(event) => handleInputChange(index, event, "field4")}
              style={{ width: "20%" }}
            />
            {field.editable ? (
              <>
                <Button type="primary" onClick={() => handleSaveField(index)}>
                  Save
                </Button>
              </>
            ) : (
              <>
                <Button type="primary" onClick={() => handleEditField(index)}>
                  Edit
                </Button>
              </>
            )}
            <Button type="danger" onClick={() => handleRemoveFields(index)}>
              Remove
            </Button>
          </div>
        ))}
        <Button onClick={handleAddField}>Add Field</Button>
      </div>
    </CommonLayout>
  );
};

export default DynamicField;
