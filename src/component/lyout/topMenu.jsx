import {RouterProvider,createHashRouter} from "react-router";
import router from "../../app/router/router.jsx";
import style from './style.module.less'
import {Dropdown, Space} from "antd";
import {
    DownOutlined,
    EditOutlined,
    LogoutOutlined,
    SettingOutlined,
    UserOutlined,
    UserSwitchOutlined
} from "@ant-design/icons";
function TopMenu(){
    const items=[
        {
            key: '1',
            label: '个人中心',
            icon: <UserSwitchOutlined />,
        },
        {
            key: '2',
            label: '修改资料',
            icon: <EditOutlined />,
        },
        {
            key: '3',
            label: '设置',
            icon: <SettingOutlined />,
        },
        {
            key: '4',
            label: '退出',
            icon: <LogoutOutlined />,
        },
    ]
    return(
        <div className={style.topMenu}>
            <Dropdown.Button menu={{ items }} className={style.loginUserItem}>
                <Space>
                    <UserOutlined />
                    张三
                    <DownOutlined />
                </Space>
            </Dropdown.Button>
        </div>
    )
}

export default TopMenu