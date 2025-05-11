import ListPage from "../../../component/ListPage/ListPage.jsx";
import axios from "axios";
import {useEffect, useRef} from "react";
import {message} from "antd";
import {DeleteOutlined, EditOutlined, FileAddOutlined} from "@ant-design/icons";
import Mock from 'mockjs'

function User() {
    const cRef = useRef({listPage: null})

    const getUser = () => {
        axios.get("/mock/api/get").then((res) => {
            const result = res.data.data;
            cRef.current.listPage.listTable.reloadSource(result.list)
        });
    }

    const add = () => {
        const {listTable} = cRef.current.listPage
        const rows = listTable.getRows()
        console.log(rows)
        if (rows && rows.length > 0) {
            message.success(JSON.stringify(rows))
        }
    }

    const option = {
        tableConfig: {
            rowKey: 'id',
            scroll: {y: 400}
        },
        columns: [
            {dataIndex: 'name', title: '姓名', key: 'name', width: 100},
            {dataIndex: 'sex', title: '性别', key: 'sex', width: 50, align: 'center'},
            {dataIndex: 'age', title: '年龄', key: 'age', width: 50, align: 'right'},
            {dataIndex: 'address', title: '地址', key: 'address', ellipsis: true},
            {dataIndex: 'email', title: 'email', key: 'email', ellipsis: true},
            {dataIndex: 'id', title: '身份证', key: 'id'},
        ],
        dataSource: [],
        initValue: {
            name: '张三', age: 14, sex: 1
        },
        btnGroup: [
            {title: '新增', icon: <FileAddOutlined/>, onClick: add, key: 'add'},
            {title: '修改', icon: <EditOutlined/>, onClick: add, key: 'edit'},
            {title: '删除', icon: <DeleteOutlined/>, onClick: add, key: 'del'},
        ],
        isSelect: true,
        onOK: (e) => {
            console.log(e)
        },
        cRef: (el) => {
            cRef.current.listPage = el.listPage
        },
        formCol: [
            {
                key: 'name',                //字段属性名
                label: '姓名',             //字段显示名
                type: {                   // 组件类型对象配置
                    key: 'input',           // 组件类型key：input,select,date……
                    config: {               // antd组件配置项
                        allowClear: true,
                    },
                },
            },
            {
                key: 'sex', label: '性别',
                type: {
                    key: 'select',
                    config: {
                        allowClear: true,
                        options: [
                            {value: 1, label: '男'},
                            {value: 0, label: '女'},
                            {value: 'disabled', label: '未定义', disabled: true},
                        ]
                    },
                },
            },
            {
                key: 'age',
                label: '年龄',
                type: {
                    key: 'input',
                    config: {
                        allowClear: true,
                        type: 'number'
                    },
                },
            },
        ],
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <ListPage
            {...option}
        />
    )

}

export default User