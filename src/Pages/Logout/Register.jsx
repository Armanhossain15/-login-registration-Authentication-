import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";


const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')

    const handleregister= e =>{
        e.preventDefault(); // for remove from default reload behavior
        const email = (e.target.email.value)
        const pass = (e.target.password.value)
        console.log(email, pass)
        setRegisterError('')
        setRegisterSuccess('')
        if(pass.length<6 ){
            setRegisterError('Password should be at least 6 characters')
            return
        }
        //create User
        createUserWithEmailAndPassword(auth, email, pass)
        .then(result => {
            const user= result.user
            console.log(user)
            setRegisterSuccess('Register Successful')
        })
        .catch(error => {
            console.log(error)
            setRegisterError(error.message)
        })
    }



    return (
        <div className="flex justify-center py-20 items-center">
            <div className="border border-gray-400  p-9 py-14 md:w-2/6 rounded-2xl">
                <h2 className="text-4xl font-bold  text-center mb-5">Please Register</h2>
                <form onSubmit={handleregister}>
                    <input type="email" name="email" placeholder="Type Email" className="input input-bordered w-full " required/> <br /> <br />
                    <input type="password" name="password" placeholder="Type pass" className="input input-bordered w-full max-w-lg" required/> <br /> <br />
                    <input className="btn btn-primary w-full" type="submit" value="Submit" />
                </form>
                {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    registerSuccess && <p className="text-green-600">{registerSuccess}</p>
                }
            </div>
        </div>
    );
};

export default Register;