import forgotPasswordImage from "../assets/images/forgotPassword.png";

function ForgotPasswordPage() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl gap-8">
        {/* Left Side - Image */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center mr-20">
          <img
            src={forgotPasswordImage}
            alt="Forgot Password Illustration"
            className="w-[90%] h-auto max-w-[500px] max-h-[600px]" // Adjust width and height
          />
        </div>

        {/* Right Side - Form with Shadow */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 bg-purple-100 rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <h2 className="mb-1 text-2xl font-bold leading-tight tracking-tight text-blue-900 md:text-2xl dark:text-white text-center">
            Forgot Password
          </h2>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgotPasswordPage;
