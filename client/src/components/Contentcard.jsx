import {Link} from "react-router-dom"
import { Parser } from "html-to-react"

const Contentcard = (props) => {

    const {title , content , author , createdAt, slug } = props

    return (
        
        <div className="col">
            <div className="card p-2 m-2">
                <Link to={`/post/${slug}`}><h3 className="fw-bold">{title}</h3></Link>
                <p>{Parser().parse(content.substring(0,50))} </p>
                <hr />
                <div className="author d-flex align-items-center">
                    <div className="rounded" style={{ height: "50px", width: "50px", backgroundColor: "black" }}></div>
                    <p className="fw-bold p-0 m-0 ps-2">{author}{new Date(createdAt).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Contentcard