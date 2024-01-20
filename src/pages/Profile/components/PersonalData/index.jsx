import ChangingEmail from "../ChangingEmail";
import ChangingPassword from "../ChangingPassword";
import ChangingName from "../ChangingName";

const PersonalData = () => {
  return (
    <section className="px-10 fade-in-from-bottom">
      <ChangingName />
      <ChangingEmail />
      <ChangingPassword />
    </section>
  );
};

export default PersonalData;
