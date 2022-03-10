import dayjs from 'dayjs';

export function getRemainingTimeInTimer(timeMs) {
    const timestampDayjs = dayjs(timeMs);
    let nowDayjs = 0;

   if(timestampDayjs.isBefore(nowDayjs)) {
       return {
        hours: '00',
        minutes: '00',
        seconds: '00',
    }
       
   }
    return {
         hours: getRemainingHours(nowDayjs, timestampDayjs),
         minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
         seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
     }
     nowDayjs += 1000;
    
}

 function getRemainingSeconds(nowDayjs, timestampDayjs) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZero(seconds, 2);
   
 }
 function getRemainingMinutes(nowDayjs, timestampDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZero(minutes, 2)
    console.log("minutes" , minutes)
}
function getRemainingHours(nowDayjs, timestampDayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZero(hours, 2)
}
function padWithZero(number, minLength) {
    const numberString = number.toString();
    if (numberString.length >= minLength){
        return numberString
    }else{
        return "0".repeat(minLength - numberString.length) + numberString
    }
}