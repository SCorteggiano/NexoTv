import GoogleLoginButton from "@/components/GoogleLoginButton/GoogleLoginButton";
import RegisterForm from "@/components/RegisterForm";

const Signup: React.FC = () => {
  return (
    <main className="bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText min-h-screen">
      <div className="mt-48 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-violet dark:text-violet">
          Register
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Register to enjoy all our movies and series
        </p>
      </div>
      <GoogleLoginButton />
      <RegisterForm />
    </main>
  );
};

export default Signup;
