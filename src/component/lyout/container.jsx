import {RouterProvider,createHashRouter} from "react-router";
import router from "../../app/router/router.jsx";
import style from './style.module.less'
import TopMenu from "./topMenu.jsx";
function container(){
    return(
        <div className={style.container}>
            <TopMenu/>
            <div className={style.containerLyout}>
                <RouterProvider router={router} />
            </div>

        </div>
    )
}

export default container