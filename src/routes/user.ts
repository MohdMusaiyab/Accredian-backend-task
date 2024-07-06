import express, { Request, Response } from "express";
const userRouter = express.Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
userRouter.get("/", (req, res) => {
  res.send("User route");
});

userRouter.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

userRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Get all referrals made by a specific user
userRouter.get("/:id/referrals", async (req, res) => {
  try {
    const { id } = req.params;
    const referrals = await prisma.referral.findMany({
      where: { referrer_id: Number(id) },
    });
    res.status(200).json(referrals);
  } catch (error) {
    res.status(400).json({ error });
  }
});
export default userRouter;
