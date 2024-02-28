import withNonAuthentication from "../../hocs/withNonAuthentication";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <main className="mx-[14.5rem] font-HelveticaBold">
      <section className="py-20">
        <h1 className="px-[2.5rem] text-center ">CREATE ACCOUNT</h1>
      </section>
      <section className="font-HelveticaRoman float-right w-[75%] ">
        <RegisterForm />
        <p>
          Please be advised that we are gathering your personal information. For
          more information, see our{" "}
          <a href="#" className="underline">
            Privacy Policy{" "}
          </a>
        </p>
      </section>
    </main>
  );
};

export default withNonAuthentication(Register);
