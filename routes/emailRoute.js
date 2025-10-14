import { Router } from "express";
import { sendEmailController } from "../controllers/emailController.js";

const router = Router();

router.route("/send-email").post(sendEmailController);

export default router;
