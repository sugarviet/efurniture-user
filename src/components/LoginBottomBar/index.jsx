import BottomBar from "@components/BottomBar";
import { useToggleLoginBottomBar } from "@hooks/useToggleBottomBar";
import withNonAuthentication from "../../hocs/withNonAuthentication";
import LoginForm from "../LoginForm";

function LoginBottomBar() {
  const { closeLoginBottomBar, isOpen } = useToggleLoginBottomBar();

  return (
    <BottomBar className="lg:max-h-[85vh] h-full" isOpen={isOpen}>
      <main className="h-full overflow-y-scroll no-scrollbar">
        <button
          onClick={() => closeLoginBottomBar()}
          className="absolute w-3 top-[1.75rem] right-[1.75rem]"
        >
          <img className="w-3" src="./images/close.svg" />
        </button>
        <section className="max-w-[43.75rem] mx-auto">
          <div className="mx-[1.5625rem] mt-[60px]">
            <h3 className="text-[1.5625rem] leading-[1.4] tracking-[0.18em] font-HelveticaBold mb-[1.5625rem]">
              RETURNING CUSTOMERS
            </h3>
            <LoginForm />
          </div>
        </section>
      </main>
    </BottomBar>
  );
}
export default withNonAuthentication(LoginBottomBar);
