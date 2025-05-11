// 计算ListTable col自动隐藏的宽度
export const getTableStyle = (cols, height= 0) => {
    let obj = {x: 0, y: 0}
    obj.y = window.outerHeight - height - 200
    if (cols && cols.length > 0) {
        cols.forEach(item => {
            obj.x += item.width || 150
        })
        obj.x += 200
    } else {
        obj.x = 1000
    }
    return obj
}
