import React, { useEffect, useState } from "react";
import Thread from "./Thread";
import { GetAllThreads } from "../../api/forum";
import { List, Empty, Button, Spin, Carousel } from 'antd';

const Threads = ({ addThread, filters }) => {
    const [threads, setThreads] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        update()
    }, [filters]);

    const update = () => {
        let newFilters = Object.fromEntries(Object.entries(filters).filter(([k, v]) => v !== undefined))
        GetAllThreads().then((e) => {
            if (Object.keys(newFilters).length > 0) {
                let newThreads = []
                e.threads.forEach((thread) => {
                    let inFilter = 0
                    Object.entries(newFilters).forEach(([key, value]) => {
                        //TO UPDATE FOR THE TAGS AND DATE
                        if (thread[key] !== value) {
                            inFilter += 1
                        }
                    });
                    if (inFilter === 0) newThreads.push(thread)
                })
                setThreads(newThreads)
            }
            else {
                setThreads(e.threads)
            }
        })
    }

    if (isLoading) {
        return (
            <Spin />
        );
    }
    const TrendingThreads = () => {
        // The threads that we get from the API must be sorted by the best ones
        // or we can have a special endpoint for this case
        const contentStyle = {
            height: '250px',
            color: '#fff',
            background: '#1890ff',
            marginBottom: "20px"
        };
        return (
            <Carousel autoplay>
                {threads.map((thread, idx) => { if (idx < 3) return <div> <Thread customStyle={contentStyle} react={false} threadId={thread.id} /> </div> })}
            </Carousel>
        )

    }

    return (threads.length > 0 ?
        <>
            {threads.length > 3 ? <TrendingThreads /> : ""}
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
                    <Thread react threadId={item.id} />
                )}
            /> </> :
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
            <Button type="primary" onClick={() => { addThread(); update() }}>Add thread</Button>
        </Empty>
    )
};

export default Threads;