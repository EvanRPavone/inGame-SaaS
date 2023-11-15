import express from "express";
import { getFeedServices, getUserServices} from "../controllers/services.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedServices);
router.get("/:userId/services", verifyToken, getUserServices);

export default router;