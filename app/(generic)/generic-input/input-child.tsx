import { Input } from "@/components/ui/input";

interface InputChildProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputChild = (props: InputChildProps) => {
  return <Input {...props} />;
};

/*
import { cn } from "@/lib/utils";

interface InputChildProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputChild = ({ className, ...props }: InputChildProps) => {
  return (
    <input
      placeholder="Name"
      className={cn("bg-red-100", className)}
      {...props}
    />
  );
};
*/
