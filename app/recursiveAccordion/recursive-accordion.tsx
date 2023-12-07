import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface RecursiveList {
  label: string;
  href: string;
  children?: RecursiveList[];
}

interface Props {
  data: RecursiveList[];
}

export const navContent: RecursiveList[] = [
  {
    label: "Documentation",
    href: "/documentation",
    children: [
      {
        label: "AIT",
        href: "documentation/ait",
        children: [
          {
            label: "Equipment & Calibration Master list",
            href: "documentation/ait/master_list",
          },
          {
            label: "VTS",
            href: "documentation/ait/vts",
            children: [
              {
                label: "Controller calibration",
                href: "documentation/ait/vts/ctrl_calb",
              },
              {
                label: "Accelerometer calibration",
                href: "documentation/ait/vts/acc_calb",
              },
            ],
          },
        ],
      },
      {
        label: "Services",
        href: "documentation/services",
      },
    ],
  },
  {
    label: "Directory",
    href: "/directory",
    children: [
      { label: "Staff", href: "directory/staff" },
      { label: "Customer", href: "directory/customer" },
      { label: "Contractor", href: "directory/Contractor" },
    ],
  },
];

const RecursiveList = (props: Props) => {
  const data = props.data;
  return (
    <ul style={{ marginLeft: "1rem" }}>
      {data.map((d, i) => (
        <li>
          <p>{d.label}</p>
          {d.children && <RecursiveList data={d.children} />}
        </li>
      ))}
    </ul>
  );
};

export const RecursiveAccordion = () => {
  return <RecursiveList data={navContent} />;
};

// const RecursiveList = (props: Props) => {
//   const data = props.data;
//   return (
//     <ul style={{ marginLeft: "1rem" }}>
//       {data.map((d, i) => (
//         <li>
//           <p>{d.label}</p>
//           {d.children && <RecursiveList data={d.children} />}
//         </li>
//       ))}
//     </ul>
//   );
// };
