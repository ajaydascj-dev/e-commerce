import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SettingsIcon from "@mui/icons-material/Settings";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

const Links = [
  { id: 1, text: "Stats", path: "/", icon: <QueryStatsIcon /> },
  { id: 2, text: "Users", path: "Users", icon: <SupervisedUserCircleIcon /> },
  { id: 3, text: "Products", path: "Products", icon: <Inventory2Icon /> },
  {
    id: 4,
    text: "Orders",
    path: "Orders",
    icon: <ProductionQuantityLimitsIcon />,
  },
  { id: 5, text: "Settings", path: "Settings", icon: <SettingsIcon /> },
];

export default Links;
