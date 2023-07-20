import { Button, Form, Input, Table } from "antd";
import React, { useEffect, useState } from "react";
import CommonLayout from "../CommonLayout";

const EditableTable = () => {
  const [dataSource, setDatasource] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [form] = Form.useForm();

  console.log({ editingRow });

  useEffect(() => {
    const data = [];
    for (let index = 0; index < 7; index++) {
      data.push({
        key: `${index}`,
        name: `name ${index}`,
        address: `address ${index}`,
      });
    }
    setDatasource(data);
  }, []);
  const columns = [
    {
      title: "name",
      dataIndex: "name",
      render: (text, record) => {
        if (editingRow == record.key) {
          return (
            <Form.Item name="name">
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "address",
      dataIndex: "address",
      render: (text, record) => {
        if (editingRow == record.key) {
          return (
            <Form.Item name="address">
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Actions",
      render: (_, record) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                setEditingRow(record.key);
                form.setFieldsValue({
                  name: record.name,
                  address: record.address,
                });
              }}
            >
              Edit
            </Button>
            <Button type="link" htmlType="submit">
              Save
            </Button>
          </>
        );
      },
    },
  ];
  const onFinish = (values) => {
    console.log({ values });
    const updatedDataSource = [...dataSource];
    updatedDataSource.splice(editingRow, 1, { ...values, key: editingRow });
    setDatasource(updatedDataSource);
    setEditingRow(null);
  };
  return (
    <CommonLayout>
      <div className="App" style={{ marginLeft: "200px" }}>
        <header className="App-Header">
          <Form form={form} onFinish={onFinish}>
            <Table columns={columns} dataSource={dataSource}></Table>
            {/* <Button htmlType="submit">Submit</Button> */}
          </Form>
        </header>
      </div>
    </CommonLayout>
  );
};

export default EditableTable;
