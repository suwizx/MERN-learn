import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Parser } from 'html-to-react'


const PageSingle = () => {
  const navigate = useNavigate();

  const { slug } = useParams();
  const [data, setData] = useState({
    data: { title: "", updatedAt: "updatedAt" },
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/blog/${slug}`)
      .then((datas) => {
        setData(datas);
        console.log(data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "เกิดข้อผิดพลาดร้ายแรง",
          text: err,
        });
      });
  }, []);

  return (
    <div>
      <div className="container mt-3">
        <h2 className="fw-bold">{data.data.title}</h2>
        <p>
          <span>
            <i className="me-1 fa-regular fa-clock"></i>
            {new Date(data.data.updatedAt).toLocaleDateString()}
          </span>
          <span>
            <i className="ms-3 me-1 fa-regular fa-user"></i>
            {data.data.author}
          </span>
        </p>
        <hr />
        <p>{Parser().parse(data.data.content)}</p>
        <hr />
        <input
          type="text"
          className="form-control"
          value={window.location.href}
        />
        <div className="btn-group mt-3">
          <button
            className="btn btn-danger"
            onClick={() => {
              axios.delete(`${process.env.REACT_APP_API}/blog/${data.data.slug}`).then((data) => {Swal.fire({ icon: "warning", title: "ลบข้อมูลสำเร็จ" });navigate("/");});
            }}
          >
            ลบโพสต์ {data.data.title}
          </button>
          <Link className="btn btn-warning" to={`/edit/${slug}`}>
            แก้ไข {data.data.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageSingle;
