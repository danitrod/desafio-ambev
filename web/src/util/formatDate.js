export const formatDate = date => {
    if (typeof date === 'string') date = new Date(date);
    const day = date.getDate().toString(),
        dayF = day.length === 1 ? '0' + day : day,
        month = (date.getMonth() + 1).toString(),
        monthF = month.length === 1 ? '0' + month : month,
        yearF = date.getFullYear(),
        hour = date.getHours().toString(),
        hourF = hour.length === 1 ? '0' + hour : hour,
        min = date.getMinutes().toString(),
        minF = min.length === 1 ? '0' + min : min;
    return dayF + '/' + monthF + '/' + yearF + ' - ' + hourF + ':' + minF;
};

export const formatDate2 = date => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
};
