import { Separator } from "@/components/ui/separator";
import { FormAccount } from "./form-account";

const AccountPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-lg font-medium ">Account</h2>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
      <FormAccount />
    </div>
  );
};

export default AccountPage;
