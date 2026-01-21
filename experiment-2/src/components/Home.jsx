import Checkboxes from "./Checkbox";
import BasicSelect from "./Select";
import BasicSwitches from "./Switch";
import HalfRating from "./rating";

export default function Home() {
  return (
    <h2>
      <BasicSwitches />
      <Checkboxes />
    </h2>
  );
}
