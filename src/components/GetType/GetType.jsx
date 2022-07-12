import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getType } from "../../store/features/typeSlice";
import Layout from "../Layout";

const GetType = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getType({ token: state.auth.token }));
  }, []);

  return (
    <Layout>
      <div>
        {state?.type?.data?.data?.type?.data &&
          state?.type?.data?.data?.type?.data?.map(
            ({ id, name, email, description }) => (
              <div>
                <div>
                  <b>Id: </b>
                  {id}
                </div>
                <div>
                  <b>Name: </b>
                  {name}
                </div>
                <div>
                  <b>Description: </b>
                  {description}
                </div>
                <hr />
              </div>
            )
          )}
      </div>
    </Layout>
  );
};

export default GetType;
