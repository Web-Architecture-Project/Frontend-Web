import ForumPage from "./Forum/ForumPage"
import CalendarPage from "./Calendar/CalendarPage"
import SyllabusPage from "./Syllabus/SyllabusPage"
import NotesPage from "./Notes/NotesPage"
import GestionPage from "./Gestion/GestionPage"
import { Layout, Menu } from 'antd'
import { useState } from 'react'
import { SettingOutlined } from '@ant-design/icons';

export default function Home() {
  const { Header, Content, Footer } = Layout;
  const [item, setItem] = useState("1")
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "#DC143C" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[item]} onSelect={(e) => setItem(e.key)} style={{ display: 'flex', flexDirection: "row", backgroundColor: "#DC143C" }}>
          <Menu.Item key="1">Forum</Menu.Item>
          <Menu.Item key="2" >Calendar</Menu.Item>
          <Menu.Item key="3" >Syllabus</Menu.Item>
          <Menu.Item key="4" >Notes</Menu.Item>
          <Menu.Item key="5" ><SettingOutlined /></Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 50 }}>
        <div className="site-layout-background" style={{ padding: 50, minHeight: "90vh" }}>
          {item === "1" ? <ForumPage /> : item === "2" ? <CalendarPage /> : item === "3" ? <SyllabusPage /> : item === "4" ? <NotesPage /> : item === "5" ? <GestionPage /> : "Coming Soon"}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Rise ©ECAM</Footer>
    </Layout>
  )
}
