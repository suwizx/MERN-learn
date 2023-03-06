const LoginPage = () => {
    return (
        <div>
            <div className="card">
                <div className="card-body text-center d-flex flex-column align-items-center">
                    <div className="bg-primary text-white p-3 rounded bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4">
                        <svg
                            className="bi bi-person"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                        </svg>
                    </div>
                    <div>
                        <div className="mb-3">
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <button
                                className="btn btn-primary shadow d-block w-100"
                                type="submit"
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
