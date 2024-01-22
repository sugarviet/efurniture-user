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

function ContactOption() {
  return (
    <ul className="flex flex-col lg:flex-row lg:justify-between">
      {CONTACT_OPTIONS.map((option, index) => {
        const { Icon, label } = option;

        return (
          <li key={`${option} + ${index}`} className="hidden lg:block">
            <a
              href="#"
              className="bg-black py-4 text-white text-md lg:py-0 lg:text-sm flex items-center"
            >
              <Icon className="w-4 h-4 mr-1 ml-4" />
              <p className="uppercase tracking-widest lg:normal-case lg:tracking-normal furniture-link-white-text">
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
