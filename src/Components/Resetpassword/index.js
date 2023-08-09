import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { resetPassword } from "../../Service/apiServices";

const ResetPwd = () => {
    const { id } = useParams();
    const [pwd, setPwd] = useState("");
    const [pwd2, setPwd2] = useState("");
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const resetPwdDB = async (id, payload) => {
        console.log("resetting pwd");
        const response = await resetPassword(id, payload);
        return response;
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (pwd === pwd2) {
            setError(false);
            console.log("reset");
            const response = resetPwdDB(id, { password: pwd });
            response
                .then((res) => {
                    if (res.status === 200) {
                        setSuccess(true);
                        setTimeout(() => {
                            navigate('/login')
                        }, 3000)
                    }
                })
                .catch((err) => {
                    console.log("Error resetting password", err);
                })

        }
        else {
            setError(true);
        }
    }
    return (
        <>
            <div className="container m-5 ">
                <div className="d-flex justify-content-center align-items-center flex-lg-row">
                    <div className=" border rounded bg-white p-5 mt-3">
                        <h5 className="mb-3">Reset Password </h5>
                        <form onSubmit={handleSubmit}>
                            <div className="my-3">
                                <label>
                                    Enter New Password:
                                </label>
                                <br></br>
                                <input type="password" onChange={(e) => setPwd(e.target.value)} required></input>
                            </div>
                            <div className="my-2">
                                <label>
                                    Confirm New Password:
                                </label>
                                <br></br>
                                <input type="password" onChange={(e) => setPwd2(e.target.value)} required></input>
                            </div>
                            <button type="submit" className="btn btn-sm btn-primary mt-3">Submit</button>
                        </form>
                        {error && <h6 className="m-3 text-danger text-break">Password do not match. Please try again.</h6>}
                        {success && <h6 className="m-3 text-success text-break">Password reset successfully !! </h6>}
                    </div>

                </div>
            </div>
        </>
    )
}
export default ResetPwd;