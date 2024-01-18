import _ from "lodash";

const LodashDifferencePage = () => {
  let database = [
    {
      id: 1,
      calb_date: "27 Sep 2023",
      calb_due: "27 Sep 2024",
    },
    {
      id: 2,
      calb_date: "27 Jun 2021",
      calb_due: "27 Jun 2022",
    },
    {
      id: 3,
      calb_date: "27 Oct 2024",
      calb_due: "27 Oct 2025",
    },
  ];

  let form = [
    {
      id: 1,
      calb_date: "20 Sep 2023",
      calb_due: "20 Sep 2024",
    },
    {
      id: 4,
      calb_date: "1 Jan 2022",
      calb_due: "1 Jan 2023",
    },
  ];

  const result = _.differenceWith(form, database, _.isEqual);
  return (
    <div className="container">
      <h2>Lodash Difference</h2>
      <div className="grid grid-cols-3">
        <div>
          Database
          <pre>{JSON.stringify(database, null, 2)}</pre>
        </div>
        <div>
          Form
          <pre>{JSON.stringify(form, null, 2)}</pre>
        </div>
        <div>
          Difference
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default LodashDifferencePage;
