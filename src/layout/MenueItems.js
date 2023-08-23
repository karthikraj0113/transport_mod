import React from 'react';
import { Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types'; 

const { SubMenu } = Menu;

const MenuItems = ({ darkMode, toggleCollapsed, topMenu, events }) => {
  const { path } = useRouteMatch();
  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');
  const { onRtlChange, onLtrChange, modeChangeDark, modeChangeLight, modeChangeTopNav, modeChangeSideNav } = events;
  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = keys => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = item => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      theme={darkMode && 'dark'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<FeatherIcon icon="more-vertical" />}
      openKeys={openKeys}
    >
          <SubMenu
        key="Transport"
        icon={(!topMenu && <ReactSVG className="sDash_menu-item-icon" />, (<FeatherIcon icon="truck" style={{color:'rgb(129, 214, 175)'}} />))}
        title={
          <>
            <span className="pl-0">Transport</span>
          </>
        }
      >
        <Menu.Item key="transport">
          <NavLink onClick={toggleCollapsed} to={`${path}/transport`}>
          Live Tracker
          </NavLink>
        </Menu.Item>
        <Menu.Item key="routes">
          <NavLink onClick={toggleCollapsed} to={`${path}/routes`}>
          Jobs Routes
          </NavLink>
        </Menu.Item>
        <Menu.Item key="students">
          <NavLink onClick={toggleCollapsed} to={`${path}/students`}>
          Students
          </NavLink>
        </Menu.Item>
        <Menu.Item key="Van_Status">
          <NavLink onClick={toggleCollapsed} to={`${path}/Van_Status`}>
          Van Status
          </NavLink>
        </Menu.Item>
        <Menu.Item key="service">
          <NavLink onClick={toggleCollapsed} to={`${path}/service`}>
          Service/Maintenance
          </NavLink>
        </Menu.Item>
        <Menu.Item key="driver">
          <NavLink onClick={toggleCollapsed} to={`${path}/driver`}>
          Driver
          </NavLink>
        </Menu.Item>
        <Menu.Item key="suggestions&complaints">
          <NavLink onClick={toggleCollapsed} to={`${path}/suggestions&complaints`}>
          Suggestions & Complaints
          </NavLink>
        </Menu.Item>
        <Menu.Item key="remainder">
          <NavLink onClick={toggleCollapsed} to={`${path}/remainder`}>
          Remainder
          </NavLink>
        </Menu.Item>
        </SubMenu>
       
    </Menu>
  );
};

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
  events: propTypes.object,
};

export default MenuItems;
