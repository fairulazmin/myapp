import { faker } from "@faker-js/faker";
import { columns } from "./columns";
import { User } from "./typedef";
import { DataTable } from "./data-table";

const user = () => {
  return {
    email: faker.internet.email(),
    fullname: faker.person.fullName(),
    sex: faker.person.sex(),
    company: faker.company.name(),
    position: faker.person.jobTitle(),
    dob: faker.date.birthdate(),
  };
};

const TableColumnFilterPage = () => {
  const users = faker.helpers.multiple(user, { count: 100 });
  const data: User[] = users.map((user, id) => ({ id: ++id, ...user }));

  return (
    <div>
      <h2>Table - Column filter</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default TableColumnFilterPage;
