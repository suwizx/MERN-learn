import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import {useNavigate} from "react-router-dom"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function PageCreate(){

    const navigate = useNavigate()

    const [data,setData] = useState({title:"",slug:""})
    const [contentData,setContentData] = useState("")

    console.log(contentData)

    const { title , slug } = data

    const changeData = name => feild =>{
        setData({...data,[name]:feild.target.value})
    }
    
    const submitData = () => {
        axios.post(`${process.env.REACT_APP_API}/create`,{title , content : contentData , slug}).then(()=>{Swal.fire({
            icon :"success",
            title :"บันทึกข้อมูลสำเร็จ"
        })
        navigate("/")
        setData({title:"",slug:""})
        setContentData("")
    
    }).catch((err)=>{
            console.log(err.response.data.errcode)
            Swal.fire({
                icon : "error",
                title : "เกิดข้อผิดพลาด",
                text : err.response.data.error,
            })
        })
        
        
    }

    return(
        <div>
            <div className="container my-3">
                <h1 className="fw-bold">Create Blog</h1>
                <div className="card p-3">
                    <div>
                        <label htmlFor="title" className="fw-bold">หัวข้อ</label>
                        <input id="title" type="text" value={title} onChange={changeData("title")} className="form-control" />
                        <label htmlFor="slug" className="fw-bold">Slug</label>
                        <input id="slug" type="text" value={slug} onChange={changeData("slug")} className="form-control" />
                    </div>
                    <div className="my-3">
                        <label htmlFor="title" className="fw-bold">เนื้อหา</label>
                        <ReactQuill  value={contentData} onChange={(e)=>{setContentData(e)}}  />
                    </div>
                    <button onClick={submitData} className="btn btn-primary">บันทึก</button>
                </div>
            </div>
        </div>
    )
} 


export default PageCreate