import { MAIN_MENU } from "../../constants";
import { TimeInterval } from "../../models/enums";

interface Props {
  activeInterval: TimeInterval;
  onIntervalChange: (value: TimeInterval) => void;
}

function MainMenu({ activeInterval, onIntervalChange }: Props) {
  return (
    <div>
      {MAIN_MENU.map((item, index) => (
        <span
          key={index}
          onClick={() => onIntervalChange(item.value)}
          style={{ backgroundColor: "turquoise", marginRight: "10px" }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}

export default MainMenu;
