class DateHelpers {
    getPrevMonth(nbrMonth) {
        const months = [];
        for (let index = 0; index < nbrMonth; index++) {
            var refDate = new Date();
            refDate.setMonth(refDate.getMonth() - index);
            var firstDayOfMonth = refDate;
            firstDayOfMonth.setDate(1);
            var lastDayOfMonth = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth() + 1, 0);
            months.push({ 'firtsDay': firstDayOfMonth, 'lastDay': lastDayOfMonth });
        }
        return months;
    }

    SELCT_SOME_LAST_MONTHS_INFOS(tableName, colName, nbrMonth, idUser) {
        return `SELECT YEAR(${colName}) as year_num, MONTH(${colName}) as month_num, MONTHNAME(${colName}) as month_name, count(*) as nbr, SUM(price) as amount, SUM(distance) as distances from \`${tableName}\` where \`id_driver\`=${idUser} AND ${colName} >= DATE_ADD(CURDATE(), INTERVAL ${nbrMonth} MONTH)  group by YEAR(${colName}), Month(${colName}),MONTHNAME(${colName})`;
    }
}


module.exports = {
    DateHelpers,
}