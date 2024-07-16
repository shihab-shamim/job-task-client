
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { Query, useQuery } from "@tanstack/react-query";
import bcrypt from 'bcryptjs';
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const LogIn = () => {
    const {setUser,setLoading}=useAuth()
    const axiosPublic=useAxiosPublic()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async info => {
        const emailOrNumber = info.emailornumber
        const password = info.password
        const isNumber = !isNaN(emailOrNumber)
        console.log(emailOrNumber,password,isNumber)

       
        try{
            
            const {data} = await axiosPublic.get(`/users?${isNumber ? `number=${emailOrNumber}` : `email=${emailOrNumber}`}`);
            console.log(data)
            if(data){
                console.log(data)
               const match=  bcrypt.compareSync(password, data.password); // true
               if(match){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log in success",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  const {name,number,email,balance,role}=data
                  const userInfo ={name,number,email,balance,role}
                  console.log(data)
                  setUser({...userInfo})
              setLoading(false)

               }
            }
            else{
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "You don't have an account",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        catch(error){
            console.log(error)
        }


        
        
    }

    return (
        <div className="container mx-auto flex justify-center items-center mt-12 md:mt-36">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-2xl font-bold">Please Sign in Your Account</h1>
                    <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="emailornumber" className="block mb-2 text-sm">Email Or Number</label>
                            <input
                                {...register('emailornumber', { required: "This field is required" })}
                                type="text"
                                id="emailornumber"
                                placeholder="email or number"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                style={{
                                    backgroundImage: 'url(chrome-extension://igkpcodhieompeloncfnbekccinhapdb/images/web_access/vault-input-disabled.svg)',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '14px',
                                    backgroundPosition: 'calc(100% - 3px) center',
                                    cursor: 'auto',
                                    backgroundClip: 'border-box'
                                }}
                                data-temp-mail-org="0"
                            />
                            {errors.emailornumber && <p className="text-red-600 text-sm">{errors.emailornumber.message}</p>}
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Pin</label>
                            </div>
                            <input
                                {...register('password', { required: true})}
                                type="password"
                                id="password"
                                placeholder="*****"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                                style={{
                                    backgroundImage: 'url(chrome-extension://igkpcodhieompeloncfnbekccinhapdb/images/web_access/vault-input-disabled.svg)',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '14px',
                                    backgroundPosition: 'calc(100% - 3px) center',
                                    cursor: 'auto',
                                    backgroundClip: 'border-box'
                                }}
                            />
                            {errors.password?.type==='required' && <p className="text-red-600 text-sm">Password is Required</p>}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <input type="submit" value='Log in' className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50" />
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">New Here? <span className="text-blue-600 font-bold"><Link to='/signup'>Create an Account</Link></span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;
