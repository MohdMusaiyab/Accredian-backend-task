import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const referralRouter = express.Router();
// Create a new referral
referralRouter.post("/create", async (req, res) => {
  try {
    const { referrer_id, referee_name, referee_email, course } = req.body;
    const referral = await prisma.referral.create({
      data: {
        referrer_id:1,
        referee_name,
        referee_email,
        course,
      },
    });
    res.status(201).json(referral);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
});

// Get details of a specific referral by ID
referralRouter.get("/referrals/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const referral = await prisma.referral.findUnique({
      where: { id: Number(id) },
    });
    if (referral) {
      res.status(200).json(referral);
    } else {
      res.status(404).json({ error: "Referral not found" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Get a list of all referrals
referralRouter.get("/referrals", async (req, res) => {
  try {
    const referrals = await prisma.referral.findMany();
    res.status(200).json(referrals);
  } catch (error) {
    res.status(400).json({ error });
  }
});

export default referralRouter;
