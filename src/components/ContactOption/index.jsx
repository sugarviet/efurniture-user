import { MapPinIcon, PuzzlePieceIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../utils/classNames";

const CONTACT_OPTIONS = [
  {
    Icon: PuzzlePieceIcon,
    label: "To be a partner of us",
  },
  {
    Icon: MapPinIcon,
    label: "Find store",
  },
];

function ContactOption({ onMobile }) {
  return (
    <ul
      className={classNames(onMobile ? "flex-col" : "justify-between", "flex")}
    >
      {CONTACT_OPTIONS.map((option, index) => {
        const { Icon, label } = option;

        return (
          <li key={`${option} + ${index}`}>
            <a
              href="#"
              className={classNames(
                onMobile ? "bg-black py-4 text-white text-md" : "",
                "flex items-center"
              )}
            >
              <Icon className="w-4 h-4 mr-1 ml-4" />
              <p
                className={classNames(
                  onMobile ? "uppercase tracking-widest" : "",
                  "furniture-link-white-text"
                )}
              >
                {label}
              </p>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactOption;
