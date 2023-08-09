import { useNavigate } from "react-router-dom";

const Sent = () => {

    const navigate = useNavigate();
    function handleClick(e) {
        navigate('/');
    }
    return (
        <>
            <h6 className=" mx-auto my-5 text-white text-break p-5">A password reset link has been sent to your email. Kindly click on the link to create a new password. Reset Link is valid for 10 minutes.</h6>

            <div className="mt-3">
                <button className="btn btn-info m-3" onClick={handleClick}>Home</button>
            </div>
        </>
    )
}
export default Sent;