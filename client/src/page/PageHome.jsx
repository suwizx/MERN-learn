import { useEffect, useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import Contentcard from "../components/Contentcard"

function PageHome() {

const [datas,setDatas] = useState([{title : "",content : "" ,slug : ""}])

useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API}/blogs`).then(res => {
        setDatas(res.data)
        }).catch(err=>{
        Swal.fire({
            icon : "error",
            title : "เกิดข้อผิดพลาดร้ายแรง",
            text : err
        })
        console.log(err)
    })
},[])

    return (
        <div>
            <div className="container my-3">
                <h1 className="fw-bold">Home Page</h1>
                <div className="py-2">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                       {JSON.stringify(datas)}
                       {datas.map((data,index)=>(<Contentcard key={index} title={data.title} content={data.content} author={data.author}/>))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHome