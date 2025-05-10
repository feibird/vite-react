import LeftMenu from "./leftMenu.jsx";
import Container from "./container";
import style from './style.module.less';
import {Flex,Splitter} from 'antd'
function Content(){
    return (
        <Flex gap="middle" vertical={false} className={style.content}>
            <Splitter className={style.SplitterPanel}>
                <Splitter.Panel defaultSize={285} min={200} max={385}>
                    <LeftMenu/>
                </Splitter.Panel>
                <Splitter.Panel>
                    <Container/>
                </Splitter.Panel>
            </Splitter>
        </Flex>
    )
}
export default Content