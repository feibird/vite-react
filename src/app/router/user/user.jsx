import TablePage from "../../../component/tablePage/tablePage.jsx";
import axios from "axios";

function User(){

    const tablePageOption={
        col:[],
        dataSource:[],
        btnGroup:[],
        tableApi:{
            url:'',
            params:{},
        }
    }

    return (
        <div className={'Home'}>
            <TablePage/>
        </div>
    )

}
export default User