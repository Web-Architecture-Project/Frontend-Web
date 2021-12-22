import { useState, useEffect } from 'react'
import { Form, DatePicker, Button, Select } from "antd"
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function Filter({ handleConfirm }) {
    const [form] = Form.useForm();

    const { RangePicker } = DatePicker;

    function onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    function onOk(value) {
        console.log('onOk: ', value);
    }

    return (
        <Form form={form} name="filter" layout="inline" onFinish={(e) => handleConfirm(e)} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
            <Form.Item name="category" style={{ width: "20%" }} >
                <Select multiple={false} placeholder="Select category">
                    <Select.Option value="Informatique">Informatique</Select.Option>
                    <Select.Option value="Category 2">Category 2</Select.Option>
                    <Select.Option value="Category 3">Category 3</Select.Option>
                    <Select.Option value="...">...</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item multiple={false} name="tags" style={{ width: "20%" }}>
                <Select placeholder="Select tag(s)" disabled>
                    <Select.Option value="Tag 1">Tag 1</Select.Option>
                    <Select.Option value="Tag 2">Tag 2</Select.Option>
                    <Select.Option value="Tag 3">Tag 3</Select.Option>
                    <Select.Option value="...">...</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name="date" >
                <RangePicker
                    showTime={{ format: 'HH:mm' }}
                    format="YYYY-MM-DD HH:mm"
                    onChange={onChange}
                    onOk={onOk}
                    disabled //Not available yet
                />
            </Form.Item>
            <Button type="primary" htmlType="submit" >Confirm</Button>
            <Button type="secondary" htmlType="reset" style={{ marginLeft: "10px" }}>Reset</Button>
        </Form>
    )
}

export default Filter
