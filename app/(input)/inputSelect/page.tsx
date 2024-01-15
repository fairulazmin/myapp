import { InputSelect } from "./inputSelect";
import { InputSelect2 } from "./inputSelect2";
import { ShadcnSelect } from "./shadcnSelect";

const InputSelectPage = () => {
  return (
    <div className="flex flex-col m-auto w-40 space-y-40 justify-center items-center">
      <div>
        Input select
        <InputSelect />
      </div>
      <div>
        Input select2
        <InputSelect2 />
      </div>
      <div className="w-full">
        Shadcn select
        <ShadcnSelect />
      </div>
    </div>
  );
};

export default InputSelectPage;
