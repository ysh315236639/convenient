import { Layout } from "antd";
import { Route } from "react-router-dom";
import routes from "../../routes";
import LeftMenus from "../../components/Menus";
import { Redirect } from "react-router-dom";

const { Sider, Content, Header } = Layout;

const Home = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <Sider>
        <LeftMenus />
      </Sider>
      <Layout>
        <Header>header</Header>
        <Content>
          <Redirect to="/welcome" />
          {routes.map((v) => (
            <Route key={v.path} path={v.path} component={v.component} />
          ))}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
