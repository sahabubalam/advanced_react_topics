import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { PlusOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import CommonLayout from "./CommonLayout";

const Test = () => {
  const initialValues = {
    students: [{ id: null, name: "", age: "" }],
  };
  const handleSubmit = async (values) => {
    console.log("values", values);
  };

  const [data, setdata] = useState([initialValues]);
  return (
    <CommonLayout>
      <div style={{marginLeft:'200px'}}>
        <h1>Student List</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          render={({ values }) => (
            <Form>
              <FieldArray
                name="students"
                render={(arrayHelpers) => (
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>name</th>
                        <th>Dept</th>
                        <th />
                        <th />
                      </tr>
                    </thead>

                    <tbody>
                      {values.students && values.students.length > 0 ? (
                        values.students.map((friend, index) => (
                          <tr key={index}>
                            <td>
                              <Field
                                className="form-control form-control-sm"
                                name={`students.${index}.name`}
                              />
                            </td>
                            <td>
                              <Field
                                className="form-control form-control-sm"
                                name={`students.${index}.dept`}
                              />
                            </td>

                            <td>
                              <Button
                                type="primary"
                                shape="circle"
                                icon={<PlusOutlined />}
                                onClick={() => {
                                  arrayHelpers.push({
                                    id: null,
                                    name: "",
                                    dept: "",
                                  });
                                }} // insert an empty string at a position
                              ></Button>
                            </td>
                            <td>
                              <Button
                                type="primary"
                                danger
                                shape="circle"
                                icon={<DeleteOutlined />}
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                              ></Button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <button
                          type="button"
                          className="btn btn-sm btn-primary mt-2"
                          onClick={() => {
                            arrayHelpers.push({ id: null, name: "", dept: "" });
                          }}
                        >
                          {/* show this when user has removed all friends from the list */}
                          Add students
                        </button>
                      )}
                    </tbody>
                  </table>
                )}
              />
              <div style={{textAlign:'left'}}>
                <button type="submit" className="btn btn-sm btn-primary">
                  Submit
                </button>
              </div>
            </Form>
          )}
        />
      </div>
    </CommonLayout>
  );
};

export default Test;
