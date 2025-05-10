import {Menu} from "antd";
import {
    AppstoreOutlined,
    AreaChartOutlined, ExceptionOutlined,
    HomeOutlined,
    MailOutlined,
    SettingOutlined,
    UserOutlined
} from "@ant-design/icons";
import LogoItem from "../logoItem/logoItem";
import style from './style.module.less'
import {useState} from "react";
function LeftMenu(){
    const[key,setKey]=useState('home')
    const items= [
        {
            key: 'home',
            label: '总览',
            router:'/home',
            icon: <AreaChartOutlined />,
        },
        {
            key: 'user',
            router:'/user',
            label: '客户管理',
            icon: <UserOutlined />,
        },
        {
            key: 'room',
            router:'/room',
            label: '房源管理',
            icon: <HomeOutlined />,
        },
        {
            key: 'flow',
            router:'/flow',
            label: '审批管理',
            icon: <ExceptionOutlined />,
        },
    ];

    const onClick=(e)=>{
        console.log(e.key)
        location.href=`/${e.key}`
        setKey(e.key)
    }

    return(
        <div className={style.leftMenu}>
            <LogoItem/>
            <Menu
                openKeys={[key]}
                onClick={onClick}
                mode="inline"
                items={items}
            />
        </div>
    )
}

export default LeftMenu