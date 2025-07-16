import { Request, Response, NextFunction, RequestHandler } from "express";
import { AppDataSource } from "../config/db";
import { Contact } from "../entity/contact2";
import { sendEmail } from "../utils/sendEmail";
import asyncWrapper from "../middleware/async";
import { ApiResponse } from "../types/common.types";


export const postContact = asyncWrapper(async (
  req: Request,
  res: Response<ApiResponse>,
  next: NextFunction
) => {
  const contactRepo = AppDataSource.getRepository(Contact);

  const {firstName,lastName,email, phone, message, subject } = req.body;

  const newContact = contactRepo.create({ firstName,lastName, email, phone, message, subject });
  const savedContact = await contactRepo.save(newContact);

  // Email to system admin 
  await sendEmail({
    recipient: process.env.ADMIN_EMAIL!, 
    subject: `New Contact Form - ${subject}`,
    body: `
      You received a new contact message:
      
      Name: ${firstName} , ${lastName}
      Email: ${email}
      Phone: ${phone}
      Subject: ${subject}
      Message: ${message}
    `,
  });

  res.status(201).json({
    success: true,
    message: "Your message was received successfully. We'll be in touch shortly!",
    data: savedContact,
  });
}) as RequestHandler;

// GET /contact
export const getAllContacts = asyncWrapper(async (
  req: Request,
  res: Response<ApiResponse>,
  next: NextFunction
) => {
  const contactRepo = AppDataSource.getRepository(Contact);
  const contacts = await contactRepo.find({
    order: {
      createdAt: "DESC",
    },
  });

  res.status(200).json({
    success: true,
    message: "All contact messages fetched.",
    data: contacts,
  });
}) as RequestHandler;
