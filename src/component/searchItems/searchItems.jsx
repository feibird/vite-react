import {Button, Col, Form, Input, Row, Select, Space, Table} from "antd";
import style from './style.module.less';
import {Option} from "antd/es/mentions/index.js";

function SearchItems() {
    const [form] = Form.useForm();
    const onFinish = e => {
        console.log(e)
    }
    

    return (
        <div className={style.searchItem}>
            <Form form={form} name="advanced_search" onFinish={onFinish}>
                <Row gutter={24}>
                    <Col span={6} key={1}>
                        <Form.Item
                            name={`field`}
                            label={`Field`}
                            rules={[
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ]}
                        >
                            <Input placeholder="placeholder"/>
                        </Form.Item>
                    </Col>
                    <Col span={6} key={2}>
                        <Form.Item
                            name={`field`}
                            label={`Field`}
                            rules={[
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ]}
                        >
                            <Input placeholder="placeholder"/>
                        </Form.Item>
                    </Col>
                    <Col span={6} key={3}>
                        <Form.Item
                            name={`field`}
                            label={`Field`}
                            rules={[
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ]}
                        >
                            <Input placeholder="placeholder"/>
                        </Form.Item>
                    </Col>
                    <Col span={6} key={4}>
                        <Form.Item
                            name={`field`}
                            label={`Field`}
                            rules={[
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ]}
                        >
                            <Input placeholder="placeholder"/>
                        </Form.Item>
                    </Col>
                    <Col span={6} key={5}>
                        <Form.Item
                            name={`field`}
                            label={`Field`}
                            rules={[
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ]}
                        >
                            <Input placeholder="placeholder"/>
                        </Form.Item>
                    </Col>
                    <Col span={6} key={6}>
                        <Form.Item
                            name={`field`}
                            label={`Field`}
                            rules={[
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ]}
                        >
                            <Input placeholder="placeholder"/>
                        </Form.Item>
                    </Col>
                    <Col span={6} key={7}>
                        <Form.Item
                            name={`field`}
                            label={`Field`}
                            rules={[
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ]}
                        >
                            <Input placeholder="placeholder"/>
                        </Form.Item>
                    </Col>
                    <Col span={6} key={8}>
                        <Form.Item
                            name={`field`}
                            label={`Field`}
                            rules={[
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ]}
                        >
                            <Input placeholder="placeholder"/>
                        </Form.Item>
                    </Col>
                </Row>
                <div style={{textAlign: 'right'}}>
                    <Space size="small">
                        <Button type="primary" htmlType="submit">
                            筛选
                        </Button>
                        <Button
                            onClick={() => {
                                form.resetFields();
                            }}
                        >
                            清除
                        </Button>
                    </Space>
                </div>
            </Form>
        </div>
    )

}

export default SearchItems