import { useParams, useNavigate } from "react-router";
const DetailBlog =() => {
    let navigate = useNavigate()
    let data = useParams()
    const handleBack = () => {
        navigate(-1);
    }
    return(
        <>
        <span onClick={handleBack}>&lt;--BACK</span>
        <h1>Hello Detail Blogs</h1>
        </>
    )
}
export default DetailBlog;