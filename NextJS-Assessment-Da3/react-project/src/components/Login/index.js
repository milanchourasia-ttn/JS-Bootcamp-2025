import { useUser } from "../../Context";

const Login = () => {
  const { login } = useUser();

  const handleLogin = () => {
    const user = {
      name: "John Doe",
      email: "johndoe@example.com",
    };
    login(user);
  };

  return( 
  <div className="container">  
    <button onClick={handleLogin}>Log In</button>
  </div>  
)};

export default Login;
