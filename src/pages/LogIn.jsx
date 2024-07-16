import { Link } from "react-router-dom";


const LogIn = () => {
    return (
        <div className="container mx-auto flex justify-center items-center mt-12  md:mt-36 ">
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
            <h1 className="my-3 text-2xl font-bold">Please Sign in Your Account</h1>
            <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
        </div>
        <form noValidate="" action="" className="space-y-12">
            <div className="space-y-4">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm">Email Or Number </label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
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
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">Pin</label>
                       
                    </div>
                    <input 
                        type="password" 
                        name="password" 
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
                </div>
            </div>
            <div className="space-y-2">
                <div>
                    <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
                </div>
                <p className="px-6 text-sm text-center dark:text-gray-600">New Here <span className="text-blue-600 font-bold"><Link>Create a Account</Link></span>?
                    {/* <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign up</a>. */}
                </p>
            </div>
        </form>
    </div>
</div>

    );
};

export default LogIn;