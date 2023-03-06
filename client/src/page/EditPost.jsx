import { useEffect , useState } from "react"
import { useParams , useNavigate } from "react-router-dom"
import axios from "axios"
import Swal from "sweetalert2"

const EditPost = ()=>{

    const navigate = useNavigate()
    const { slug } = useParams()

    const [data , setData]  = useState({})

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/blog/${slug}`).then(datafetch=>setData(datafetch.data))
    },[])

    const updateData = name => e =>{
        setData({...data,[name]:e.target.value})
    }

    const submit = () => {
        axios.put(`${process.env.REACT_APP_API}/blog/${slug}`,data).then(()=>{Swal.fire({title:"บันทึกการแก้ไขเรียบร้อย",icon:"success"})}).catch((err)=>{console.log(err)})
        navigate(`/post/${slug}`)
    }

    return(
        <div>

            <div className="container my-3">
                <h1 className="fw-bold">Edit : {data.title}</h1>
                <div className="card p-3">
                    <div>
                        <label htmlFor="title" className="fw-bold">หัวข้อ</label>
                        <input id="title" type="text" value={data.title} onChange={updateData("title")}  className="form-control" />
                    </div>
                    <div className="my-3">
                        <label htmlFor="title" className="fw-bold">หัวข้อ</label>
                        <textarea className="form-control" value={data.content} onChange={updateData("content")} style={{height : "300px"}}></textarea>
                    </div>
                    <button onClick={submit} className="btn btn-primary">บันทึกการเปลี่ยนแปลง</button>
                </div>
            </div>
        </div>
    )
}

export default EditPost