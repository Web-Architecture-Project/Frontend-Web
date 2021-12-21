import React, { useEffect, useState } from "react";
import Thread from "./Thread";
import { GetAllThreads } from "../../api/forum";
import { List, Empty, Button, Spin } from 'antd';

const Threads = ({ addThread }) => {
    const [threads, setThreads] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        GetAllThreads().then((e) => setThreads(e.threads))
    }, []);

    if (isLoading) {
        return (
            <Spin />
        );
    }

    return (threads.length > 0 ?
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={threads}

            renderItem={item => (
                <Thread threadId={item.id} />
            )}
        /> :
        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
                height: 60,
            }}
            description={
                <span>
                    No threads
                </span>
            }
        >
            <Button type="primary" onClick={() => { addThread(); GetAllThreads().then((e) => setThreads(e.threads)) }}>Add thread</Button>
        </Empty>
    )
};

export default Threads;