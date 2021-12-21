import AddNewThread from "./AddNewThread";
import Threads from "./Threads";
import { Button, Input, Carousel } from "antd";
import { useState, useEffect } from "react"
import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons"

const ForumPage = () => {
  const [showAdd, setShowAdd] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const [addGhost, setAddGhost] = useState(false)
  const [filterGhost, setFilterGhost] = useState(false)

  useEffect(() => {
    setAddGhost(!showAdd)
    setFilterGhost(!showFilter)
  }, [showAdd, showFilter])

  const TrendingThreads = () => {
    const contentStyle = {
      height: '300px',
      color: '#fff',
      lineHeight: '300px',
      textAlign: 'center',
      background: '#1890ff',
    };

    return (<Carousel autoplay>
      <div>
        <h3 style={contentStyle}>Thread 1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Thread 2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Thread 3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Thread 4</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Thread 5</h3>
      </div>
    </Carousel>
    );
  }

  return (
    <>
      <TrendingThreads />
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
        <Button style={{ marginRight: 5 }} size="medium" ghost={addGhost} onClick={() => setShowAdd(!showAdd)} type="primary" shape="circle" icon={<PlusOutlined />} />
        <Input placeholder="Future search bar" style={{ marginBottom: "20px", borderRadius: "20px" }} />
        <Button style={{ marginLeft: 5 }} size="medium" ghost={filterGhost} onClick={() => setShowFilter(!showFilter)} type="primary" shape="circle" icon={<UnorderedListOutlined />} />
      </div>
      {showAdd ? <AddNewThread handleSubmit={() => setShowAdd(false)} /> : <Threads addThread={() => setShowAdd(true)} />}
    </>
  );
};

export default ForumPage;
