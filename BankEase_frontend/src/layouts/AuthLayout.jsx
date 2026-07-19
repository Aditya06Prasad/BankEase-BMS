const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-slate-100">

      {/* Left Section */}
      <div className="w-[35%] bg-blue-600 flex flex-col justify-center items-center text-white p-12">
        <h1 className="text-5xl font-bold mb-4">
          BankEase
        </h1>

        <p className="text-xl text-blue-100 text-center max-w-md">
          Secure, Simple and Smart Banking for Everyone.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-[65%] bg-white flex justify-center items-center">

        <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10">
          {children}
        </div>

      </div>

    </div>
  );
};

export default AuthLayout;