import AddNewThread from "./AddNewThread";
import Threads from "./Threads";
import { Button, Input, Carousel } from "antd";
import { useState, useEffect } from "react"
import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons"
import Filter from "./Filter";

const ForumPage = () => {
  const [showAdd, setShowAdd] = useState(false)
  const [showFilter, setShowFilter] = useState(false)
  const [addGhost, setAddGhost] = useState(false)
  const [filterGhost, setFilterGhost] = useState(false)
  const [filters, setFilters] = useState({})

  useEffect(() => {
    setAddGhost(!showAdd)
    setFilterGhost(!showFilter)
  }, [showAdd, showFilter])

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
        <Button style={{ marginRight: 5 }} size="medium" ghost={addGhost} onClick={() => setShowAdd(!showAdd)} type="primary" shape="circle" icon={<PlusOutlined />} />
        <Input placeholder="Future search bar" style={{ marginBottom: "20px", borderRadius: "20px" }} />
        <Button style={{ marginLeft: 5 }} size="medium" ghost={filterGhost} onClick={() => setShowFilter(!showFilter)} type="primary" shape="circle" icon={<UnorderedListOutlined />} />
      </div>
      {showFilter ? <Filter handleConfirm={(values) => setFilters(values)} /> : ""}
      {showAdd ? <AddNewThread handleSubmit={() => setShowAdd(false)} /> : <Threads filters={filters} addThread={() => setShowAdd(true)} />}
    </>
  );
};

export default ForumPage;
