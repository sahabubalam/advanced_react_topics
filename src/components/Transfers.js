import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Transfer } from "antd";

const Transfers = () => {
  const [form] = Form.useForm();
  const [task, setTask] = useState([]);

  const data = {
    task: [
      { key: 1, title: "sahabub" },
      { key: 2, title: "ayesha" },
      { key: 3, title: "azmal" },
      { key: 4, title: "aziz" },
      { key: 5, title: "faria" },
      { key: 6, title: "masud" },
    ],
    info: [
      { key: 1, title: "a" },
      { key: 2, title: "b" },
      { key: 3, title: "c" },
      { key: 4, title: "d" },
      { key: 5, title: "e" },
      { key: 6, title: "f" },
    ],
  };

  let initialTargetKeys = [1, 3, 4];
  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  let infoinitialTargetKeys = [1, 2, 3];
  const [targetKeys1, setTargetKeys1] = useState(infoinitialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [selectedKeys1, setSelectedKeys1] = useState([]);

  const onChange = (nextTargetKeys, direction, moveKeys) => {
    setTargetKeys(nextTargetKeys);
  };
  const onChange1 = (nextTargetKeys, direction, moveKeys) => {
    setTargetKeys1(nextTargetKeys);
  };

  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };
  const onSelectChange1 = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelectedKeys1([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  useEffect(() => {
    setTask(data);
  }, []);

  const onFinish = (values) => {
    console.log({ values });
  };

  return (
    <div className="mt-5">
      <Form
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        initialValues={{
          name: "",
          task: [],
          taskIds: {targetKeys},
          infoIds: {targetKeys1}
        }}
      >
        <Form.Item
          name="name"
          label="Note"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="taskIds"
          label="Tasks"
          rules={[]}
          valuePropsName="targetKeys"
        >
          <Transfer
            dataSource={data.task}
            titles={["Source", "Target"]}
            targetKeys={targetKeys}
            onSelectChange={onSelectChange}
            onChange={onChange}
            render={(item) => item.title}
          />
        </Form.Item>
        <Form.Item
          name="infoIds"
          label="Information"
          rules={[]}
          valuePropsName="targetKeys"
        >
          <Transfer
            dataSource={data.info}
            titles={["Source", "Target"]}
            targetKeys={targetKeys1}
            onSelectChange={onSelectChange1}
            onChange={onChange1}
            render={(item) => item.title}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Transfers;
