import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.init";


const HeroRegistar = () => {
    const handleRegister = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.pass.value
        // console.log(email, pass)
        // creat user
        createUserWithEmailAndPassword(auth, email, pass)
        .then(result=> {
            console.log(result.user)
        })
        .catch(error=> {
            console.log(error)
        })
    }


    return (
        <div>
            <div className=" flex justify-center items-center min-h-screen ">
                <div className=" w-2/6">
                    <div className="card  w-full shadow-xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="pass" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroRegistar;