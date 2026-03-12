let birthday = new Date("1998-02-24");
let dateNow = new Date();
console.log(birthday);

seconds = (parseInt((dateNow - birthday) / 1000));
console.log(seconds);

minutes = parseInt(seconds / 60);
console.log(minutes);

hours = parseInt(minutes / 60)
console.log(hours);

days = parseInt(hours / 24)
console.log(days);

months = parseInt(days / 30)
console.log(months);

years = parseInt(months / 12)
console.log(years);

// separator
console.log(seconds + " Seconds");
console.log(minutes + " Minutes");
console.log(hours + " Hours");
console.log(days + " Days");
console.log(months + " Months");
console.log(years + " Years");


const birthday_ = new Date("1998-02-24");
const now_ = new Date();

// احسب الفرق بالمللي ثانية
const diffMs_ = now_ - birthday_;

// ثواني، دقائق، ساعات، أيام
const seconds_ = Math.floor(diffMs_ / 1000);
const minutes_ = Math.floor(seconds_ / 60);
const hours_ = Math.floor(minutes_ / 60);
const days_ = Math.floor(hours_ / 24);

// الشهور والسنين بالتقريب
const months_ = Math.floor(days_ / 30);
const years_ = Math.floor(months_ / 12);

// الطباعة النهائية
console.log(`${seconds_} Seconds`);
console.log(`${minutes_} Minutes`);
console.log(`${hours_} Hours`);
console.log(`${days_} Days`);
console.log(`${months_} Months`);
console.log(`${years_} Years`);