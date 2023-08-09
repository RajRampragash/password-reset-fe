import { useState } from "react";
import { forgotPassword } from "../../Services/apiServices";
import { useNavigate } from "react-router-dom";

const ForgotPwd = () => {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [msg, setMsg] = useState(false);
    const forgotPasswordDB = async (email) => {
        const response = await forgotPassword({ email: email });
        return response;
    }
    function handleClick(e) {
        navigate('/signup');
    }
    function handleLogin(e) {
        navigate('/login');
    }
    function handleSubmit(e) {
        e.preventDefault();
        setMsg(true);
        //console.log(email); 
        const response = forgotPasswordDB(email)
        response
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data)
                    navigate('/sent');
                }
            })
            .catch((err) => console.log(err))
    }
    return (
        <>
            <div className="mt-3">
                <p className="text-white">New User ? </p>
                <button className="btn btn-info m-3" onClick={handleClick}>Sign Up</button>
                <button className="btn btn-info m-3" onClick={handleLogin}>Log in</button>
            </div>
            <div className="container m-5 ">
                <div className="d-flex justify-content-center align-items-center flex-lg-row">
                    <div className=" border rounded bg-white p-5 mt-3">
                        <h5 className=" p-2">Forgot Password ?</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="form-outline m-4">
                                <label className="form-label mx-2 p-2 fw-bold" >Enter Email address:</label>
                                <input type="email" className="form-control m-2 border border-secondary-subtle" onChange={(e) => setEmail(e.target.value)} required></input>
                            </div>
                            <button type="submit" className="btn btn-sm btn-primary m-3">Send Reset Link</button>
                        </form>
                        {msg && <p>Processing request.. Please wait..</p>}
                    </div>
                </div>
            </div>

        </>
    )
}
export default ForgotPwd;