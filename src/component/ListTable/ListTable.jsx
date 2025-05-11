import {Menu, message, Table, Tooltip} from 'antd';

import React, {FC, useEffect, useImperativeHandle, useState,} from 'react';
import style from './style.module.less'
import dayjs from "dayjs";
import {getTableStyle} from "../../util/CommonFn.jsx";

const ListTable = (props) => {
    const [columns, setColumns] = useState([]);
    const [selectRowKeys, setSelectRowKeys] = useState([]);
    const [selectRows, setSelectRows] = useState([]);
    const rowSelection = {
        selectRowKeys, // 指定选中项的 key 数组，需要和 onChange 进行配合
        onChange: (e = [], a = []) => {
            setSelectRowKeys(e)
            setSelectRows(a)
        },
    };
    const {tableConfig = {}, btnGroup} = props;
    const [pageSource, setPageSource] = useState([]);
    const [tableStyle, setTableStyle] = useState({});
    const [activeItem, setActiveItem] = useState({});
    useImperativeHandle(props.cRef, () => {
        return {
            getRows: () => {
                if (selectRows && selectRows.length > 0) {
                    return selectRows
                }
                message.info('请先开启多选功能参数并选择数据')
            },
            getRowkeys: () => {
                if (selectRowKeys && selectRowKeys.length > 0) {
                    return selectRowKeys
                }
                message.info('请先开启多选功能参数并选择数据')
            },
            reloadSource: (source) => {
                console.log()
                setPageSource(JSON.parse(JSON.stringify(source)))
            }
        }
    })

    useEffect(() => {
        const {columns, dataSource} = props;
        let cols = [];
        setPageSource([...dataSource])
        cols = columns.map((item) => {
            if (item['type'] === 'date') {
                item['render'] = (value) => {
                    return (
                        <Tooltip
                            placement="topLeft"
                            title={value ? dayjs(value).format('YYYY-MM-DD HH:mm:ss') : ''}
                            // @ts-ignore
                            className={style.hiddenText}
                        >
                            {value ? dayjs(value).format('YYYY-MM-DD HH:mm:ss') : ''}
                        </Tooltip>
                    );
                };
            } else {
                if (!item['render']) {
                    item['render'] = (value) => {
                        return (
                            <Tooltip
                                placement="topLeft"
                                title={value}
                                // @ts-ignore
                                className={style.hiddenText}
                            >
                                <div
                                    className={style.hiddenText}
                                    style={{width: item['width'] ? item['width'] - 20 + 'px' : 'auto'}}
                                >
                                    {value}
                                </div>
                            </Tooltip>
                        );
                    };
                }
            }
            return item
        })
        setColumns(cols)
        setTableStyle(getTableStyle(cols, tableConfig.height || 300))

    }, [props])


    const rowClassName = (record) => {
        if (record[tableConfig.columnsKey]) {
            return record[tableConfig.columnsKey] === activeItem[tableConfig.columnsKey] ? 'activeRow' : ''
        }
    }

    const childrenRender = (item) => {
        if (item && item.length) {
            const {key, col} = props.renderRow;
            return <Table
                rowKey={key}
                columns={col}
                dataSource={item}
                pagination={false}
                size={'small'}
            />;
        }
    }

    return (
        <div className={style.listTable}>
            <div className={style.listMenu}>
                <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
                    {
                        btnGroup && btnGroup.map((item) => {
                            return (
                                <Menu.Item
                                    key={item.key}
                                    icon={item.icon}
                                    onClick={() => {
                                        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                        item.onClick && item.onClick(selectRows)
                                    }}
                                >
                                    {item.title}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </div>
            <div className={style.listSource}>
                <Table
                    rowKey={(res) => {
                        return res[tableConfig.columnsKey] && res[tableConfig.columnsKey]
                    }}
                    rowSelection={props.isSelect ? rowSelection : false}
                    pagination={props.pagination}
                    rowClassName={rowClassName}
                    columns={columns}
                    dataSource={pageSource}
                    bordered
                    scroll={tableStyle}
                    size={'small'}
                    expandable={props.renderRow ? {
                        expandedRowRender: (record) => childrenRender(record.childrenTree)
                    } : null}
                    onRow={(record) => {
                        return {
                            onClick: () => {
                                setActiveItem(record)
                            }, // 点击行
                            onDoubleClick: () => {
                                setActiveItem(record)
                                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                tableConfig.onDoubleClick && tableConfig.onDoubleClick(record)
                            }
                        };
                    }}
                    {...tableConfig}
                />
            </div>
        </div>
    )
}

export default ListTable
