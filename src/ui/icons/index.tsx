import AlertCircle from "./alert-circle";
import Check from "./check";
import ChevronDown from "./chevron-down";
import ChevronUp from "./chevron-up";
import Email from "./email";
import EyeOpen from "./eye-open";
import Facebook from "./facebook";
import Hamburger from "./hamburger";
import Instagram from "./instagram";
import Linkedin from "./linkedin";
import Location from "./location";
import Medium from "./medium";
import Telephone from "./telephone";
import Twitter from "./twitter";
import { IconProps, Icons } from "./types";
import User from "./user";

interface Props extends IconProps {
  type: Icons;
}

export function Icon({ type, color, size }: Props) {
  const props = { color, size };

  switch (type) {
    case Icons.AlertCircle:
      return <AlertCircle {...props} />;

    case Icons.Check:
      return <Check {...props} />;

    case Icons.ChevronDown:
      return <ChevronDown {...props} />;

    case Icons.ChevronUp:
      return <ChevronUp {...props} />;

    case Icons.Email:
      return <Email {...props} />;

    case Icons.EyeOpen:
      return <EyeOpen {...props} />;

    case Icons.Facebook:
      return <Facebook {...props} />;

    case Icons.Hamburger:
      return <Hamburger {...props} />;

    case Icons.Instagram:
      return <Instagram {...props} />;

    case Icons.Linkedin:
      return <Linkedin {...props} />;

    case Icons.Location:
      return <Location {...props} />;

    case Icons.Medium:
      return <Medium {...props} />;

    case Icons.Telephone:
      return <Telephone {...props} />;

    case Icons.Twitter:
      return <Twitter {...props} />;

    case Icons.User:
      return <User {...props} />;

    default:
      return <p>Pick an Icon</p>;
  }
}
