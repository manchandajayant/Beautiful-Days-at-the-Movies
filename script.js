//Given a range of numbered days,  and a number , determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where  is evenly divisible by . If a day's value is a beautiful number, it is a beautiful day. Print the number of beautiful days in the range.


function beautifulDaysInRange(startDay, endingDay, divisor) {
  let count = 0;
 
  for (let i = startDay; i <= endingDay; i++) {
    //console.log(i);
    let k = i.toString().split("").reverse().join("");
    let l = parseInt(k);

    let c = l - i;
    console.log(c % divisor === 0);
    if (c % divisor === 0) {
      count++;
    }
  }

  console.log(count);
}