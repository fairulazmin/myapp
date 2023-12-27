import { DataTable } from "./data-table";
import { Payment, columns } from "./columns";

const data: Payment[] = [
  {
    no: 1,
    jumlah: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    no: 2,
    jumlah: 230,
    status: "processing",
    email: "xbox@google.com",
  },
  {
    no: 3,
    jumlah: 80,
    status: "success",
    email: "my@edge.com",
  },
];

const TanstackTablePage = () => {
  return (
    <div className="container mx-auto">
      <h2 className="font-semibold text-2xl">Tanstack Table</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default TanstackTablePage;
