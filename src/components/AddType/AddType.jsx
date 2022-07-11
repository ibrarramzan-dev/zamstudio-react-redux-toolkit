import { useState } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout";
import { addType } from "../../store/features/typeSlice";

const AddType = () => {
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  console.log("Image: ", image);
  const onFinish = (values) => {
    dispatch(addType({ ...values, token }));
  };

  return (
    <Layout>
      <div>
        <h2 style={{ textAlign: "center", marginTop: "10px" }}>Add Type</h2>
        <Row>
          <Col xs={8}></Col>
          <Col xs={8}>
            <Form
              name="basic"
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input name" }]}
              >
                <Input placeholder="Name" />
              </Form.Item>

              <Form.Item
                name="description"
                rules={[
                  { required: true, message: "Please input description" },
                ]}
              >
                <Input placeholder="Description" />
              </Form.Item>

              <Form.Item
                rules={[{ required: true, message: "Please select image" }]}
              >
                <Input
                  type="file"
                  onChange={(event) => setImage(event.target.files[0])}
                />
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
    </Layout>
  );
};

export default AddType;
