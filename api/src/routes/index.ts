import { Router } from "express";
import controller from "../controllers/index";

const router = Router();

router.get("/", controller.helloWorld);
router.get("/trackOfTheDay", controller.trackOfTheDay);
router.get("/tracks/:id", controller.trackById);

export default router;