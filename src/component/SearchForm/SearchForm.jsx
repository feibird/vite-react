import {Button, Col, DatePicker, Form, Input, Row, Select} from 'antd';
import React, {FC, useEffect, useState,} from 'react';
import style from './style.module.less';

const SearchForm = (props) => {
    const {formCol = [], span = 6} = props;
    const [searchModalStatus, setSearchModalStatus] = useState(false);
    const [hideInputs, setHideInputs] = useState([]);
    const [formCols, setFormCols] = useState([]);
    const [form] = Form.useForm()
    useEffect(() => {
        const {initValue} = props;
        let showArr = [], hideArr = [];
        if (initValue) form.setFieldsValue(initValue)
        formCol.forEach((item, index) => {
            if (index < 3) {
                showArr.push(item)
            } else {
                hideArr.push(item)
            }
        })
        setFormCols(showArr);
        setHideInputs(hideArr);
    }, [props])

    const changeStatus = () => {
        setSearchModalStatus(!searchModalStatus)
    }
    const onFinish = (values) => {
        props.onOk && props.onOk(values)
    };

    const onReset = () => {
        form.resetFields();
        props.onReset && props.onReset()
    };

    const getFields = (col) => {
        let childrenNodes = [];
        col.forEach((item) => {
            ;(item => {
                const commpnent = item.type;
                switch (commpnent.key) {
                    case 'input':
                        childrenNodes.push(
                            <Col span={span}>
                                <Form.Item
                                    label={item.label}
                                    name={item.key}
                                >
                                    <Input {...commpnent.config}/>
                                </Form.Item>
                            </Col>
                        );
                        break;
                    case 'select':
                        childrenNodes.push(
                            <Col span={span}>
                                <Form.Item
                                    label={item.label}
                                    name={item.key}
                                >
                                    <Select {...commpnent.config}/>
                                </Form.Item>
                            </Col>
                        );
                        break;
                    case 'DatePicker':
                        childrenNodes.push(
                            <Col span={span}>
                                <Form.Item
                                    name={item.key}
                                    label={item.label}
                                >
                                    <DatePicker  {...commpnent.config}/>
                                </Form.Item>
                            </Col>
                        );
                        break;
                    default:
                        if (commpnent.FormInput) {
                            const {FormInput} = commpnent
                            childrenNodes.push(
                                <Col span={span}>
                                    <Form.Item
                                        name={item.key}
                                        label={item.label}
                                    >
                                        <FormInput/>
                                    </Form.Item>
                                </Col>
                            );
                        }
                        break;
                }
            })(item);
        });
        return childrenNodes
    }
    return (
        <div className={style.searchFormLayout}>
            <Form onFinish={onFinish} form={form} name={'search-form'}>
                <div className={style.formLyout}>
                    <div className={style.formInputLyout}>
                        <Row gutter={24}>
                            {getFields(formCols)}
                        </Row>
                        {
                            searchModalStatus && <Row gutter={24}>
                                {getFields(hideInputs)}
                            </Row>
                        }
                    </div>
                    <div className={style.formBtn}>
                        <Form.Item>
                            {hideInputs.length > 0 && (
                                <a
                                    href="javascript:"
                                    onClick={changeStatus}
                                    style={{marginRight: 20, marginLeft: 50, color: '#6495ED'}}
                                >
                                    高级搜索
                                </a>
                            )}
                            <Button type="primary" htmlType="submit">
                                搜索
                            </Button>
                            <Button style={{marginLeft: 10}} onClick={onReset}>
                                重置
                            </Button>
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default SearchForm
