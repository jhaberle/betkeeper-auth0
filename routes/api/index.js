const router = require("express").Router();
const betslipRoutes = require("./betslips");

router.use("/betslips", betslipRoutes);

module.exports = router;