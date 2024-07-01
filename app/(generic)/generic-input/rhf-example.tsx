import {
  useForm,
  Controller,
  SubmitHandler,
  Control,
  FieldValues,
  FieldPath,
} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

const App = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      iceCreamType: {},
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm name="firstName" control={control} />
      <SelectForm
        name="iceCreamType"
        control={control}
        options={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" },
        ]}
      />
      <input type="submit" />
    </form>
  );
};

const InputForm = <T extends FieldValues, P extends FieldPath<T>>({
  control,
  name,
}: {
  control: Control<T>;
  name: P;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Input {...field} />}
    />
  );
};

const SelectForm = <T extends FieldValues, P extends FieldPath<T>>({
  control,
  name,
  options,
}: {
  control: Control<T>;
  name: P;
  options: { value: string; label: string }[];
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select {...field}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </Select>
      )}
    />
  );
};
