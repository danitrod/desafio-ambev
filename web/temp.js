const formatDate = date => {
    const day = date.getDate().toString(),
        dayF = day.length === 1 ? '0' + day : day,
        month = (date.getMonth() + 1).toString(),
        monthF = month.length === 1 ? '0' + month : month,
        yearF = date.getFullYear(),
        hour = date.getHours().toString(),
        hourF = hour.length === 1 ? '0' + hour : hour,
        min = date.getMinutes().toString(),
        minF = min.length === 1 ? '0' + min : min;
    return dayF + '/' + monthF + '/' + yearF + ', ' + hourF + ':' + minF;
};

console.log(formatDate(new Date('2011-05-01T09:32:02')));
// const test = new Date();
// test.get;
