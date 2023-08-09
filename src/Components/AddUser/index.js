import { useState } from "react";
import { addUser } from "../../Services/apiServices";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate();

    const addUserDB = async (payload) => {
        const response = await addUser(payload);
        return response;
    }

    function handleClick(e) {
        navigate('/');
    }
    function handleSubmit(e) {
        e.preventDefault();
        const response = addUserDB({ email: email, username: user, password: pwd })
        response
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    console.log(res.data);
                    window.alert(`User account created for : ${res.data.data}`)
                    setSuccess(true)
                    setError(false)
                }
            })
            .catch((err) => {
                setError(true)
                setSuccess(false)
                console.log(err.response.data.message);
                window.alert(`User account not created : ${err.response.data.message}`)
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
                        <h5 className="mb-3">Sign up </h5>
                        <form onSubmit={handleSubmit}>
                            <div className="my-3">
                                <label>
                                    Enter email:
                                </label>
                                <br></br>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} required></input>
                            </div>
                            <div className="my-3">
                                <label>
                                    Enter username:
                                </label>
                                <br></br>
                                <input type="text" onChange={(e) => setUser(e.target.value)} required></input>
                            </div>
                            <div className="my-2">
                                <label>
                                    Enter Password:
                                </label>
                                <br></br>
                                <input type="password" onChange={(e) => setPwd(e.target.value)} required></input>
                            </div>
                            <button type="submit" className="btn btn-sm btn-primary mt-3">Sign up</button>
                        </form>
                        {error && <h6 className="m-3 text-danger text-break"> User account not created. Please try again.</h6>}
                        {success && <h6 className="m-3 text-success text-break"> User Account created !! </h6>}
                    </div>

                </div>
            </div>

        </>
    )
}
export default AddUser;