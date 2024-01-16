import { faker } from "@faker-js/faker";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export interface User {
  id: number;
  name: string;
  email: string;
  children: { name: string; age: number }[];
  address: {
    street: string;
    country: string;
  };
  dob: Date;
}

const getChildren = () => {
  return {
    name: faker.person.fullName(),
    age: faker.number.int({ min: 1, max: 20 }),
  };
};

const getPerson = () => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    children: faker.helpers.multiple(getChildren, {
      count: { min: 1, max: 3 },
    }),
    address: {
      street: faker.location.street(),
      country: faker.location.country(),
    },
    dob: faker.date.birthdate(),
  };
};

const NestedTablePage = () => {
  const persons = faker.helpers.multiple(getPerson, { count: 100 });
  const data: User[] = persons.map((person, id) => ({
    id: ++id,
    ...person,
  }));

  return (
    <div className="container">
      <h2 className="font-semibold text-2xl">Nested Table</h2>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default NestedTablePage;
