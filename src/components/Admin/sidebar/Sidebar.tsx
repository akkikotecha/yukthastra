import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import style from './Sidebar.module.css';
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Link } from 'react-router-dom';

export default function Signin() {

  return (
  
    <div style={{ display: "flex", height: "100vh" }} >
        <Sidebar className={`app akk ${style.bgChange}`}>
        <Menu className={style.menuBgColor}>
        
        <img loading="lazy" alt="" className='ps-1 mt-2 w-75 mx-auto' src="/image-1@2x.png" />

        <Link to="/admin-dashboard"><MenuItem icon={<GridViewRoundedIcon />}  > Dashboard </MenuItem></Link>
        <Link to="/#"><MenuItem icon={<ReceiptRoundedIcon />}> Certificate </MenuItem></Link>
        <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
          <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
          <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
        </SubMenu>
        <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
          <MenuItem icon={<AccountBalanceRoundedIcon />}>
            Current Wallet
          </MenuItem>
          <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
        </SubMenu>
        <MenuItem icon={<MonetizationOnRoundedIcon />}>Transactions</MenuItem>
        <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
          <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
          <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
          <MenuItem icon={<NotificationsRoundedIcon />}>
            Notifications
          </MenuItem>
        </SubMenu>
        <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
      </Menu>
    </Sidebar>
    
  </div>
  );
}
