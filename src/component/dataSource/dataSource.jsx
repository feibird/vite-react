import {Table} from "antd";
import style from './style.module.less';

function DataSource() {
    const col = [
        {title: '名称', dataIndex:'name',key: 'name', width: 200},
        {title: '性别', dataIndex:'sex',key: 'sex', width: 100},
        {title: '年龄', dataIndex:'age',key: 'age', width: 100},
        {title: '地址', dataIndex:'address',key: 'address', width: 200},
        {title: '类型', dataIndex:'type',key: 'type', width: 200},
        {title: '重要度', dataIndex:'grade',key: 'grade', width: 200},
        {title: '备注', dataIndex:'desc',key: 'desc'},
    ];
    const data = [
        {name: '张三', sex: 1, age: 20, address: '湖北武汉', type: 1, grade: 5, desc: 'das',id:1,},
        {name: '张三', sex: 1, age: 20, address: '湖北武汉', type: 1, grade: 5, desc: 'das',id:2},
        {name: '张三', sex: 1, age: 20, address: '湖北武汉', type: 1, grade: 5, desc: 'das',id:3},
        {name: '张三', sex: 1, age: 20, address: '湖北武汉', type: 1, grade: 5, desc: 'das',id:4},
        {name: '张三', sex: 1, age: 20, address: '湖北武汉', type: 1, grade: 5, desc: 'das',id:5},
        {name: '张三', sex: 1, age: 20, address: '湖北武汉', type: 1, grade: 5, desc: 'das',id:6},
    ]
    return (
        <div className={style.dataSource}>
            <Table
                bordered
                columns={col}
                dataSource={data}
            />
        </div>
    )
}

export default DataSource