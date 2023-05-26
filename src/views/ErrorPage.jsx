import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();
  const handleHomeBtn=()=>{
    navigate('/')
    
  }
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <button className="btn btn-primary" onClick={handleHomeBtn}>Go to Homepage</button>
    </div>
  );
}   
export default ErrorPage;