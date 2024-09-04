import { z } from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2, { message: "Too short" }),
    username: z.string().min(2, { message: "Too short" }),
    email: z.string().email(),
    password: z
        .string()
        .min(8, { message: "password must be atleast 8 characters" }),
});

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(8, { message: "password must be atleast 8 characters" }),
});

export const postValidation = z.object({
    caption: z.string().min(3).max(2000),
    file: z.custom<File[]>(),
    location: z.string(),
    tags: z.string(),
});