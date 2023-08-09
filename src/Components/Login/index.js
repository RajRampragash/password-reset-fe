import { useState } from "react";
import { verifyLogin } from "../../Services/apiServices";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const verifyLoginDB = async (payload) => {
        const response = await verifyLogin(payload);
        return response;
    }
    function handleClick(e) {
        navigate('/');
    }
    function handleSubmit(e) {
        e.preventDefault();
        const response = verifyLoginDB({ email: email, password: pwd })
        response
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data.data);
                    setSuccess(true)
                    setError(false)
                    window.alert(`User credentials verified for: ${res.data.data}`)
                }
            })
            .catch((err) => {
                setError(true)
                setSuccess(false)
                console.log(err.message);
            })

    }
    return (
        <>
            <div className="mt-3">
                <button className="btn btn-info m-3" onClick={handleClick}>Home</button>
            </div>
            <div className="container m-5 ">
                <div className="d-flex justify-content-center align-items-center flex-lg-row">
                    <div className=" border rounded bg-white p-5 mt-3">
                        <h5 className="mb-3"> Verify Login credentials</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="my-3">
                                <label>
                                    Enter email:
                                </label>
                                <br></br>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} required></input>
                            </div>
                            <div className="my-2">
                                <label>
                                    Enter Password:
                                </label>
                                <br></br>
                                <input type="password" onChange={(e) => setPwd(e.target.value)} required></input>
                            </div>
                            <button type="submit" className="btn btn-sm btn-primary mt-3">Login</button>
                        </form>
                        {error && <h6 className="m-3 text-danger text-break"> Invalid credentials Please try again.</h6>}
                        {success && <h6 className="m-3 text-success text-break"> Login credentials valid !! </h6>}
                    </div>

                </div>
            </div>
        </>
    )
}
export default Login;