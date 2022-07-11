import { Form, Input, Button, Row, Col } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/features/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token !== "") {
      navigate("/");
    }
  }, [token]);

  const onFinish = (values) => {
    console.log("Values: ", values);
    dispatch(login(values));
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "10px" }}>Login</h2>
      <Row>
        <Col xs={8}></Col>
        <Col xs={8}>
          <Form
            name="basic"
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={8}></Col>
      </Row>
    </div>
  );
};

export default Login;
