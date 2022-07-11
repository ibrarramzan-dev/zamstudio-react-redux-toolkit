import Layout from "../Layout";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/features/authSlice";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token === "") {
      navigate("/login");
    }
  }, [token]);

  return (
    <Layout>
      <h3>Home</h3>

      <Button type="link" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </Layout>
  );
};

export default Home;
