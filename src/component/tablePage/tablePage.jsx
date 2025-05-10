import DataSource from "../dataSource/dataSource.jsx";
import style from './style.module.less'
import SearchItems from "../searchItems/searchItems.jsx";
import {Flex, Radio} from "antd";
import {DeleteOutlined, EditOutlined, ExportOutlined, FileAddOutlined, ImportOutlined} from "@ant-design/icons";
import axios from "axios";

function TablePage() {
    const getUser = () => {
        axios.get("/mock/api/get").then((res) => {
            console.log(res);
        });
    }


    const groupBtn = e => {
        console.log(e)
        getUser()
    }

    return (
        <div className={style.tablePage}>
            <SearchItems/>
            <Flex>
                <Radio.Group onChange={groupBtn} defaultValue="a" className={style.btnGroup}>
                    <Radio.Button value="1"><FileAddOutlined/>新增</Radio.Button>
                    <Radio.Button value="2"><EditOutlined/>修改</Radio.Button>
                    <Radio.Button value="3"><DeleteOutlined/>删除</Radio.Button>
                    <Radio.Button value="4"><ImportOutlined/>导入</Radio.Button>
                    <Radio.Button value="5"><ExportOutlined/>导出</Radio.Button>
                </Radio.Group>
            </Flex>
            <DataSource/>
        </div>
    )
}

export default TablePage