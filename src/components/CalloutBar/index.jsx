import styles from "./CalloutBar.module.css";
import ContactOption from "../ContactOption";

const CALLOUT_MESSAGES = [
  "Shop our favorite furniture at NEW LOWER PRICES",
  "Explore 3D Model with AR IN YOUR HOME NOW!!!",
];

function CalloutBar() {
  return (
    <div className="flex justify-between items-center h-10 text-white text-sm bg-black px-4 sm:px-6 lg:px-8">
      <div className="font-light tracking-widest overflow-hidden h-full">
        <ul className={styles.ticker_container}>
          {CALLOUT_MESSAGES.map((message) => (
            <li key={message} className={styles.ticker_item}>
              {message}
            </li>
          ))}
        </ul>
      </div>
      <nav className="hidden items-center md:flex">
        <ContactOption onMobile={false} />
      </nav>
    </div>
  );
}

export default CalloutBar;
