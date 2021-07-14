import { Menu } from "antd";
import { Link } from "react-router-dom";
import routes from "../../routes";

const LeftMenus = () => {
  return (
    <>
      <Menu defaultSelectedKeys={["/welcome"]} mode="inline" theme="dark">
        {routes.map((v) => (
          <Menu.Item key={v.path} icon={v.icon}>
            <Link to={v.path}>{v.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default LeftMenus;
