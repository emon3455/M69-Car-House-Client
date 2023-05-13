import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";


const Social = () => {

    const { loginWithGoogle } = useContext(AuthContext);

    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then(res=>{
            const user = res.send();
            if(user){
                alert("user created successfully");
            }
        })
        .catch(er=>{
            console.log(er.message);
        })
    }

    return (
        <div className="flex justify-evenly">
            <span onClick={handleGoogleLogin} className="p-4 btn-ghost rounded-full text-orange-400 text-lg"><FaGoogle></FaGoogle></span>
            <span className="p-4 btn-ghost rounded-full text-sky-600 text-lg"><FaFacebookF></FaFacebookF></span>
            <span className="p-4 btn-ghost rounded-full text-lg"><FaGithub></FaGithub></span>
        </div>
    );
};

export default Social;