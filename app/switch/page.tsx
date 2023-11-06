import { Switch } from "./switch";
import { Switch2 } from "./switch2";
import { Switch as ShadcnSwitch } from "@/components/ui/switch";

const SwitchPage = () => {
  return (
    <div className="flex flex-col items-center space-y-10">
      <Switch />
      <Switch2 />
      <ShadcnSwitch />
    </div>
  );
};

export default SwitchPage;
