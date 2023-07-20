import { Button, Checkbox, Form, Input } from 'antd';
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { setUser } from './user.reducers';


const Login = () => {
  let { form } = Form.useForm();
  let dispatch = useDispatch();
   const { isLoggedIn } = useSelector((state) => state.user);

   let navigate =useNavigate()

  const onFinish = () => {
    const data={
        token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdXBlcmFkbWluIiwiaWF0IjoxNjg2MDIxNjc1LCJleHAiOjE2ODYwNDMyNzV9.o9D8siP6lIjDd5b9eUHIrys1LfWdPCYrGbfju5wUwkqyr6oESoAjMIG-xqA5Dt2i53SnfxunH6_0mfMv2ZSc5w",
        refreshToken: "72d4da2b-c081-44ab-83da-149322b74195",
        type: "Bearer",
        id: 1,
        username: "superadmin",
        roles: [
            "1"
        ],
        defaultAccessRight: [
            {
                moduleId: 100,
                moduleName: "AIRCRAFT",
                order: null,  
                actionViewModelList: [
                    {
                        actionId: 10000,
                        actionName: "Save",
                        accessRightId: 100
                    },
                    {
                        actionId: 10001,
                        actionName: "Edit",
                        accessRightId: 101
                    },
                    {
                        actionId: 10002,
                        actionName: "Delete",
                        accessRightId: 102
                    },
                ]
            },
        ]
    }
    localStorage.setItem('userId',`${data.id}`);
    localStorage.setItem('token',`${data.token}`);
    localStorage.setItem('refreshToken',`${data.refreshToken}`);
    dispatch(setUser(data));
    navigate("/test")
  };

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <Form
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
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

export default Login;
