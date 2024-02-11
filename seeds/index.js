const seedCurrency = require("./currency");
const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");
    await seedCurrency();
    console.log("\n----- Currency SEEDED -----\n");
  
    process.exit(0);
};

seedAll();