import { MapPinIcon, PuzzlePieceIcon } from "@heroicons/react/24/outline";
import styles from "./CalloutBar.module.css";

const CALLOUT_MESSAGES = [
  "Shop our favorite furniture at NEW LOWER PRICES",
  "Explore 3D Model with AR IN YOUR HOME NOW!!!",
];

const CALLOUT_OPTIONS = [
  {
    Icon: PuzzlePieceIcon,
    label: "To be a partner of us",
  },
  {
    Icon: MapPinIcon,
    label: "Find store",
  },
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
      <nav className="flex items-center">
        <ul className="flex justify-between">
          {CALLOUT_OPTIONS.map((option, index) => {
            const { Icon, label } = option;

            return (
              <li key={`${option} + ${index}`}>
                <a href="#" className="flex items-center hover:cursor-pointer">
                  <Icon className="w-4 h-4 mr-1 ml-4" />
                  <p>{label}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default CalloutBar;
