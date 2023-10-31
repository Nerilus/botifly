const { getUsers, getUser, deleteUser, updateUser } = require("../controllers/user");
const { verifyUser, verifyAdmin } = require("../utils/verifytoken");
const express = require("express");


const router = express.Router();


router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUsers);

//GET ALL
router.get("/", verifyAdmin, getUsers);

module.exports = router;
