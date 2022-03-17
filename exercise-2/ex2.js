var moment = require("moment")
const getCurrentDate = () => {
    const date = moment(new Date()).format('MMMM Do YYYY');
    const time = moment(new Date()).format('h:mm:ss a')
    console.log(date, ':', time)
}
getCurrentDate()