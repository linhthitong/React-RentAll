const router = require("express").Router();

const UserRoutes 	= require("./user");
const AccountRoutes = require("./account");
const ItemRoutes 	= require("./item");
const categoryRoutes 	= require("./category");
const rentalRoutes 	= require("./rental");

router.use("/user", UserRoutes);

router.use("/account", AccountRoutes);

router.use("/item", ItemRoutes);

router.use("/category", categoryRoutes);

router.use("/rental", rentalRoutes);

module.exports = router;
