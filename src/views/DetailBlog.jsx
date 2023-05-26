import { useParams, useNavigate } from "react-router";
import useFetch from "../model/fetchHTTP";
const DetailBlog =() => {
    let navigate = useNavigate()
    let {id} = useParams()
    const handleBack = () => {
        navigate(-1);
    }
    const{data: dataBlogDetail, isLoading, isError} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    console.log('Check data detail: ',dataBlogDetail)
    return(
        <>
        <span onClick={handleBack}>&lt;--BACK</span>
        <div className="blog-detail">
            {dataBlogDetail && 
            <>
                {isLoading ? "Loading...." :
                    <>   
                    <div className="title">
                        Blog ID: {id} --- {dataBlogDetail.title}</div>
                    <div className="content">{dataBlogDetail.body}</div>
                    </>
                }  
                
            </>
            }
        </div>
        </>
    )
}
export default DetailBlog;