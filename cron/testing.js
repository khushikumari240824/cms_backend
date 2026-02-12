import cron from "node-cron";
export const testing = ()=>{
    console.log("testing function schedule")
    cron.schedule("* * * * *",()=>{
        console.log("running testing");

    }) // first star is minutes second hours third day fourth month fifth year
}