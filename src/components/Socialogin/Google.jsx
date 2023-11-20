import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const Google = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        
        navigate("/");
      });
    });
  };
  return (
    <div>
      <hr className="mb-3 border-gray-300"></hr>
      <div className="mx-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-neutral  w-full"
        >
          <FaGoogle />
          Google
        </button>
      </div>
    </div>
  );
};

export default Google;
