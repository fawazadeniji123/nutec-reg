import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const signUpFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  college: z.enum(
    [
      "COLENG",
      "COLPHYS",
      "COLERM",
      "COLBIOS",
      "COLAMRUD",
      "COLPLANT",
      "COLPHEC",
      "COLVET",
      "COLANIM"
    ],
    {
      message: "Please select a valid college.",
    }
  ),
  department: z.string().min(3, {
    message: "Department must be at least 3 characters.",
  }),
  matricNumber: z.string().min(4, {
    message: "input valid matric number",
  }),
  passwordForm: z
    .object({
      password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
      }),
      confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
      message: "Passwords don't match",
      path: ["confirm"], // path of error
    }),
});
