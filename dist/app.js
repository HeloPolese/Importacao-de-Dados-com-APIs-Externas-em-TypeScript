//import cron from "node-cron";
const cron = require("node-cron");

cron.schedule('*/10 * * * * *', async () => {
    console.log("teste node-cron");
});

