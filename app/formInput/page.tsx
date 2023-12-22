import { SensitivityForm } from "./sensitivity-form";
import { MuForm } from "./mu-form";
import { Separator } from "@/components/ui/separator";

const FormInput = () => {
  return (
    <div className="w-[700px] mx-auto p-4 space-y-6">
      <SensitivityForm />
      <Separator />
      <MuForm />
    </div>
  );
};

export default FormInput;
