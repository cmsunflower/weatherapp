// 格式化时间
export default function timeFormat(date,format){
    date = new Date(date);
    let ret;
    let opt = {
        'Y+': date.getFullYear().toString(),
        'm+': (date.getMonth() + 1).toString(),
        'd+': date.getDate().toString(),
        'H+': date.getHours().toString(),
        'M+': date.getMinutes().toString(),
        'S+': date.getSeconds().toString()
    }
    if(/(E+)/.test(format)){
        format = format.replace(RegExp.$1,
            ((RegExp.$1.length > 1)
                ? ( RegExp.$1.length > 2
                    ? '星期'
                    : '周')
                : '') + '日一二三四五六'.charAt(date.getDay()));
    }
    for(let k in opt){
        ret = new RegExp("(" + k + ")").exec(format);
        if (ret) {
            format = format.replace(ret[1], 
                (ret[1].length === 1)
                ? opt[k]
                : opt[k].padStart(ret[1].length, '0'));
        }
    }
    return format;
}