import GoogleLoginButton from "@/components/GoogleLoginButton/GoogleLoginButton";
import RegisterForm from "@/components/RegisterForm";

const Signup: React.FC = () => {
  return (
    <main>
      <div className="mt-48 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
          Register
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
          Register to enjoy all our movies and series
        </p>
      </div>
      <GoogleLoginButton/>
      <RegisterForm />
    </main>
  );
};

export default Signup;
