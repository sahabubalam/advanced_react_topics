import React, { useEffect, useMemo, useState } from "react";
import { Button, Col, DatePicker, Form, Row, Space } from "antd";
import moment from "moment";
import DebounceSelect from "./DebounceSelect";
import API from "./API";

const SelectForm = () => {
  const [form] = Form.useForm();
  const [value, setValue] = useState([]);

  const onFinish = (values) => {
    console.log({ values });
  };

  // async function fetchUserList(username) {
    
  //   return fetch("https://dummyjson.com/users")
  //     .then((response) => response.json())
  //     .then((body) =>
  //       body.users.map((user) => ({
  //         label: `${user.firstName}`,
  //         value: user.id,
  //       }))
  //     );
  // }

  

  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        style={{
          maxWidth: 600,
          margin: 80,
          textAlign: "center",
        }}
      >
        <Form.Item  name="taskIds">
          <DebounceSelect
            mode="multiple"
            debounceTimeout={1000}
            showSearch
            showArrow
            searchParam="user"
            value={value}
            placeholder="Select users"
            url={`task-status/report`}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SelectForm;
