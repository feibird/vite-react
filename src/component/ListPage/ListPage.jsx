import SearchForm from "../SearchForm/SearchForm.jsx";
import ListTable from "../ListTable/ListTable.jsx";
import {useEffect, useRef} from "react";

function ListPage(props) {
    const {formCol, columns, dataSource, btnGroup, pagination, tableConfig, onOK, span = 8, isSelect, initValue} = props;
    const ref = useRef({listPage: {searchForm: null, listTable: null}})

    useEffect(() => {
        props.cRef && props.cRef(ref.current)
    }, [props])

    return (
        <div className={'listPage'}>
            {formCol && <SearchForm
                formCol={formCol}
                span={span}
                initValue={initValue}
                onOk={onOK}
                cRef={(el) => (ref.current.listPage.searchForm = el)}
            />}
            <ListTable
                columns={columns}
                dataSource={dataSource}
                btnGroup={btnGroup || []}
                tableConfig={tableConfig}
                pagination={pagination}
                isSelect={isSelect}
                cRef={(el) => (ref.current.listPage.listTable = el)}
            />
        </div>
    )
}

export default ListPage