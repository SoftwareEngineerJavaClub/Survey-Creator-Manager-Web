// Landing Page
import Hero from "./components/svg/Hero";

const Page = () => {
  return (
    <>
      <main className="bg-violet-800 min-h-screen m-auto p-12 lg:flex lg:flex-row">
        <div className="text-gray-100 max-lg:text-center m-auto px-10 max-w-lg">
          <h1 className="text-5xl font-bold mb-5  ">
            Conduct your next survey here
          </h1>
          <p className=" max-lg:m-auto ">
            Write questions, distribute your survey, and review user input all
            in one place
          </p>
          {/* TO DO: hook up this form to send email to login page and auto-input to login form */}
          <form className="max-lg:flex max-lg:flex-col max-lg:max-w-xs m-auto">
            <input
              className="mt-5 rounded-md p-2  lg:w-[320px] lg:mr-4 text-gray-700 "
              type="text"
              placeholder="Insert email address"
            ></input>
            <input
              className="cursor-pointer px-4 mt-2 mb-5 rounded-md text-teal-900 font-bold bg-teal-200 py-2"
              type="submit"
              value="Sign Up"
            ></input>
          </form>
        </div>
        <div className=" w-100 sm:w-9/12 m-auto max-w-md">
          <Hero className="w-full" />
        </div>
      </main>
    </>
  );
};

export default Page;
