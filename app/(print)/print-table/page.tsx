"use client";

import { useRef } from "react";
import { DataTable } from "./table";
import { faker } from "@faker-js/faker";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import { useReactToPrint } from "react-to-print";

const getMasterlist = () => {
  return {
    equipment: faker.vehicle.vehicle(),
    identification: faker.vehicle.vin(),
    manufacturer: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    accuracy: faker.number.int(),
    range: faker.number.int(),
    location: faker.location.city(),
    calb_date: faker.date.past(),
    calb_interval: faker.number.int({ min: 365, max: 720 }),
    calb_due: faker.date.future(),
    limitation: faker.lorem.word(),
    status: faker.lorem.word(),
  };
};

const PrintTablePage = () => {
  const masterlists = faker.helpers.multiple(getMasterlist, { count: 100 });
  const data = masterlists.map((masterlist, id) => ({
    id: ++id,
    ...masterlist,
  }));

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @media print {
        @page {size: landscape;}
        @page {margin: 1.27cm 1.27cm 1.27cm 1.27cm !important;}
        html, body {
          height: 100%;
          margin: 1rem !important;
          padding: 0 !important;
        }
        table {
          table-layout: fixed;
        }
        th, td {
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: break-word
        }
        table, th, td {
          border: 1px solid black;
          border-collapse: collapse;
        }
        .divider {
          break-after: always;
        }
        table tr th:nth-child(1) {
          width: 60px;
        }
        table tr th:nth-child(10) {
          width: 70px;
        }
      }
    `,
  });

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">Print Table</h2>
      <div className="container">
        <Button className="bg-sky-600" onClick={handlePrint}>
          <Printer className="w-4 h-4 mr-2" />
          Print
        </Button>
        <div ref={componentRef}>
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default PrintTablePage;
