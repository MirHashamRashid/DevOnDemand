import { Icon } from "@iconify/react";
import { PATH_DASHBOARD } from "../../routes/paths";
// const ICONS = {
//   dashboard: () => <Icon icon="jam:users" style={{ width: 20, height: 20 }} />,
//   customers: <Icon icon="jam:users" style={{ width: 20, height: 20 }} />,
//   user: <Icon icon="carbon:user-avatar" style={{ width: 20, height: 20 }} />,
//   cashflow: (
//     <Icon
//       icon="fluent:text-bullet-list-tree-20-regular"
//       style={{ width: 20, height: 20 }}
//     />
//   ),
//   users: <Icon icon="jam:users" style={{ width: 20, height: 20 }} />,
//   pdf: (
//     <Icon
//       icon="fluent:text-bullet-list-tree-20-regular"
//       style={{ width: 20, height: 20 }}
//     />
//   ),
//   settings: <Icon icon="tabler:settings" style={{ width: 20, height: 20 }} />,
// };

const navConfig = [
  {
    subheader: "",
    items: [
      {
        title: "Dashboards",
        path: PATH_DASHBOARD.root,
        children: [
          {
            title: "Default",
            path: PATH_DASHBOARD.Dashboard.Default,
          },
          {
            title: "Analytics",
            path: PATH_DASHBOARD.Dashboard.Analytics,
           
          },
          {
            title: "E-commerce",
            path: PATH_DASHBOARD.Dashboard.Ecommerce,
       
          },
        ],
      },
    ],
  },
];

export { navConfig };
