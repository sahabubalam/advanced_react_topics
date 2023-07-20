import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space } from "antd";
import CommonLayout from "./CommonLayout";
const { Option } = Select;
const areas = [
  {
    label: "Beijing",
    value: "Beijing",
  },
  {
    label: "Shanghai",
    value: "Shanghai",
  },
];
const sights = {
  Beijing: ["Tiananmen", "Great Wall"],
  Shanghai: ["Oriental Pearl", "The Bund"],
};
const TestForm = () => {
  const [form] = Form.useForm();

  const existingData = {
    area: "Beijing",
    sights: [
      {
        sight: "Tiananmen",
        price: 100,
      },
      {
        sight: "Great Wall",
        price: 200,
      },
    ],
    infos: [
      {
        name: "sahabub",
        address: "rajshahi",
        email: "sahabub@gmail.com",
      },
      {
        name: "ayesha",
        address: "rajshahi",
        email: "ayesha@gmail.com",
      },
    ],
  };

  form.setFieldsValue({
    area: existingData.area,
    sights: existingData.sights.map((sight, index) => ({
      sight: sight.sight,
      price: sight.price,
    })),
    info: existingData.infos.map((info, index) => ({
      name: info.name,
      address: info.address,
      email: info.email,
    })),
  });

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  const handleChange = () => {
    form.setFieldsValue({
      sights: [],
    });
    console.log(form.getFieldValue("sights"));
  };

  return (
    <CommonLayout>
      <div style={{ marginLeft: "200px" }}>
        <h2
          style={{
            textAlign: "left",
            textDecoration: "underline",
            marginBottom: "5px",
          }}
        >
          Multiple Input Form
        </h2>
        <Form
          form={form}
          name="dynamic_form_complex"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          autoComplete="off"
        >
          <Form.Item
            name="area"
            label="Area"
            rules={[
              {
                required: true,
                message: "Missing area",
              },
            ]}
          >
            <Select options={areas} onChange={handleChange} />
          </Form.Item>
          <Form.List name="sights">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <Space key={field.key} align="baseline">
                    <Form.Item
                      noStyle
                      shouldUpdate={(prevValues, curValues) =>
                        prevValues.area !== curValues.area ||
                        prevValues.sights !== curValues.sights
                      }
                    >
                      {() => (
                        <Form.Item
                          {...field}
                          label="Sight"
                          name={[field.name, "sight"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing sight",
                            },
                          ]}
                        >
                          <Select
                            disabled={!form.getFieldValue("area")}
                            style={{
                              width: 130,
                            }}
                          >
                            {(sights[form.getFieldValue("area")] || []).map(
                              (item) => (
                                <Option key={item} value={item}>
                                  {item}
                                </Option>
                              )
                            )}
                          </Select>
                        </Form.Item>
                      )}
                    </Form.Item>
                    <Form.Item
                      {...field}
                      label="Price"
                      name={[field.name, "price"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing price",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                  </Space>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add sights
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.List name="info">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <Space key={field.key} align="baseline">
                    <Form.Item>
                      <Form.Item
                        {...field}
                        label="Name"
                        name={[field.name, "name"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing name",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Form.Item>
                    <Form.Item
                      {...field}
                      label="Address"
                      name={[field.name, "address"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing address",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      label="Email"
                      name={[field.name, "email"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing email",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                  </Space>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add info
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item style={{ textAlign: "left" }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </CommonLayout>
  );
};
export default TestForm;
