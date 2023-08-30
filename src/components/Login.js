import React from "react";
import styled from "styled-components";
import { Row, Col, Card, Form, Input, Button } from "antd";
import img from "../components/images/test.svg";

const LoginForm = styled(Form)`
  text-align: center;
  .ant-form-item {
    margin-bottom: 12.5px;
  }
`;

const ContainerDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const FirstDiv = styled.div`
  background-color: rebeccapurple;
  height: 100vh;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const SecondDiv = styled.div`
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenteredCard = styled(Card)`
  width: 70%;
  height: 300px;
  background-color: #f1f1f1;
`;

const Login = () => {
  return (
    <ContainerDiv>
      <Row>
        <Col xs={24} sm={24} md={12}>
          <FirstDiv>
            <img src={img} alt="" />
          </FirstDiv>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <SecondDiv>
            <CenteredCard>
              <LoginForm layout="vertical">
                <Form.Item label="Email">
                  <Input />
                </Form.Item>
                <Form.Item label="Password">
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button style={{marginTop:'10px'}}>LOGIN</Button>
                </Form.Item>
              </LoginForm>
            </CenteredCard>
          </SecondDiv>
        </Col>
      </Row>
    </ContainerDiv>
  );
};

export default Login;
