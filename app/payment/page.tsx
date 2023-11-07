import { promises as fs } from "fs";
import path from "path";
import { DataTable } from "./data-table";
import { Payment, columns } from "./columns";

const getPayments = async () => {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/payment/data-person.json"),
  );

  const payments = JSON.parse(data.toString());
  return payments;
};

const PaymentPage = async () => {
  const data = await getPayments();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentPage;
