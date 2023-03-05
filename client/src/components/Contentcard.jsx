const Contentcard = (props) => {

    const {title , content , author } = props

    return (
        <div className="col">
            <div className="card p-2 m-2">
                <h3 className="fw-bold">{title}</h3>
                <p>{content}</p>
                {/* <Link to="/" className="btn btn-primary">ดูรายละเอียด</Link> */}
                <hr />
                <div className="author d-flex align-items-center">
                    <div className="rounded" style={{ height: "50px", width: "50px", backgroundColor: "black" }}></div>
                    <p className="fw-bold p-0 m-0 ps-2">{author}</p>
                </div>
            </div>
        </div>
    )
}

export default Contentcard