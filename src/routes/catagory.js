import express from "express";

import { deleteCategory, getAllCategory, getOneCategory, postCategory, putCategory } from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();
router.get("/categories", getAllCategory);
router.get("/categories/:id", getOneCategory);
router.post("/categories", postCategory);
router.delete("/categories/:id", deleteCategory);
router.put("/categories/:id", putCategory);

export default router;
