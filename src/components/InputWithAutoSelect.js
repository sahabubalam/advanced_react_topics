import {
  Button,
  Col,
  Form,
  Input,
  notification,
  Row,
  Select,
  Space,
} from "antd";
import React, { useState } from "react";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Option } from "antd/lib/mentions";

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 24, offset: 0 },
  },
};

const InputWithAutoSelect = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log({ values });
  };

  const all = [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "orange" },
    { id: 4, name: "coconut" },
  ];
  const [unusedOptions, setUnusedOptions] = useState(all);

  const add = () => {
    const info = form.getFieldValue("info") || [];
    console.log({ info });
    const nextIndex = info.length - info.length;
    const nextOption = unusedOptions[nextIndex];

    if (!nextOption) {
      notification.error({ message: "No more options available!" });
      return;
    }

    form.setFieldsValue({
      info: [...info, { selectField2: nextOption.id, address: "", email: "" }],
    });

    const newUnusedOptions = unusedOptions.filter(
      (option) => option.id !== nextOption.id
    );
    console.log({ newUnusedOptions });
    setUnusedOptions(newUnusedOptions);
  };

  return (
    <div style={{ margin: "20px" }}>
      <Form
        form={form}
        name="dynamic_form_item"
        {...formItemLayoutWithOutLabel}
        onFinish={onFinish}
        style={{ maxWidth: "100%" }}
      >
        <Form.List name="info">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Row key={index}>
                  <Col span={7} style={{ paddingRight: "10px" }}>
                    <Form.Item
                      {...field}
                      name={[field.name, "selectField2"]}
                      rules={[
                        { required: true, message: "Missing selectField2" },
                      ]}
                      span={8}
                    >
                      <Select placeholder="Select">
                        {all?.map((item, index) => (
                          <Option value={item.id} key={index}>
                            {item.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col
                    span={7}
                    style={{ paddingRight: "10px", paddingLeft: "10px" }}
                  >
                    <Form.Item
                      {...field}
                      name={[field.name, "address"]}
                      rules={[{ required: true, message: "Missing address" }]}
                      span={8}
                    >
                      <Input placeholder="address" />
                    </Form.Item>
                  </Col>
                  <Col span={7} style={{ paddingLeft: "10px" }}>
                    <Form.Item
                      {...field}
                      name={[field.name, "email"]}
                      rules={[{ required: true, message: "Missing email" }]}
                      span={8}
                    >
                      <Input placeholder="email" />
                    </Form.Item>
                  </Col>
                  <Col span={1}>
                    <MinusCircleOutlined
                      onClick={() => {
                        const fieldValue = form.getFieldValue("info");
                        console.log({fieldValue});
                        const removedOptionId =
                          fieldValue[field.name]["selectField2"];
                        const newUnusedOptions = [...unusedOptions];
                        console.log({removedOptionId});
                        console.log("sssssss",newUnusedOptions);
                        newUnusedOptions.push(
                          all.find((option) => option.id === removedOptionId)
                        );
                        setUnusedOptions(newUnusedOptions);
                        remove(field.name);
                      }}
                    />
                  </Col>
                </Row>
              ))}
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="dashed" onClick={add} block icon={<PlusOutlined />}>
            Add info
          </Button>
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

export default InputWithAutoSelect;
