import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const SignUp = () => {
    const{user,setUser,loading,setLoading}=useAuth()
    console.log(user,loading)
    // const localUser=localStorage.getItem('user')
    // console.log(localUser)
    const axiosPublic=useAxiosPublic()
    const { register, handleSubmit  , formState: { errors },} = useForm();
    const onSubmit = async data => {
      const name = data.name 
      const number = data.number 
      const email=data.email 
      const pin = data.pin 
      const balance = 0 
      const role ='pending'
      console.log(name,number,email,pin)

      const info ={
        name,number,email,pin ,balance,role
      }
      try{
        const {data}=await axiosPublic.post('/users',info)
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Sign Up Success ${name}`,
                showConfirmButton: false,
                timer: 1500
              });
            //   const{name,number,email,balance,role} =info
              const userInfo ={name,number,email,balance,role}
              setUser({...userInfo})
              setLoading(false)
        }
      }
      catch(error){
        console.log(error)
      }
      
       
    };

    return (
        <div className="container mx-auto flex justify-center items-center mt-12 md:mt-36">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-2xl font-bold">Please Register Your Account</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                            <input
                                {...register('name',{required:true})}
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            />
                            {errors.name?.type === "required" && (
                  <p className="text-red-600 mt-2">Name is required</p>
                )}
                        </div>
                        <div>
                            <label htmlFor="number" className="block mb-2 text-sm">Phone Number</label>
                            <input
                                {...register('number',{required:true,
                                    minLength: 11,
                                    maxLength: 11,
                                    pattern: /^\d+$/,
                                  },)}
                                type="text"
                                name="number"
                                placeholder="Your Number"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            />
                                  {errors.number?.type === "required" && (
                  <p className="text-red-600 mt-2">Password is required</p>
                )}
                                  {/* {errors.number?.type === "pattern" && (
                  <p className="text-red-600 mt-2">Only Number must be 11</p>
                )} */}
                                  {errors.number?.type === "minLength" && (
                  <p className="text-red-600 mt-2">Min 11 digit only Number</p>
                )}
                                  {errors.number?.type === "maxLength" && (
                  <p className="text-red-600 mt-2">Max 11 digit only Number</p>
                )}
                                  {errors.number?.type === "pattern" && (
                  <p className="text-red-600 mt-2">Only number </p>
                )}
                        </div>
                        <div>
                            <label htmlFor="emailOrNumber" className="block mb-2 text-sm">Email </label>
                            <input
                                {...register('email',{required:true,})}
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            />
                               {errors.email?.type === "required" && (
                  <p className="text-red-600 mt-2">Password is required</p>
                )}
                        </div>
                        <div>
                            <label htmlFor="pin" className="block mb-2 text-sm">Pin</label>
                            <input
                                {...register('pin',{required:true, minLength: 5,
                                    maxLength: 5,pattern: /^\d+$/,})}
                                type="password"
                                name="pin"
                                placeholder="*****"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                            />
                               {errors.pin?.type === "required" && (
                  <p className="text-red-600 mt-2">Pin is required</p>
                )}
                               {errors.pin?.type === "minLength" && (
                  <p className="text-red-600 mt-2">Pin min 5</p>
                )}
                               {errors.pin?.type === "maxLength" && (
                  <p className="text-red-600 mt-2">Pin max 5</p>
                )}
                               {errors.pin?.type === "pattern" && (
                  <p className="text-red-600 mt-2">Only Number </p>
                )}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <input type="submit" value='Sign Up ' className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"/>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">
                            Already Have an Account? <span className="text-blue-600 font-bold"><Link to='/'>Log in</Link></span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
