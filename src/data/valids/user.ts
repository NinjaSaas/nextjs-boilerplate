import * as z from "zod";

export const userAuthSchema = z.object({
  email: z.string().min(5).email(),
});
export const accountSchema = z.object({
  id: z.string(), // Required to identify the user to update
  name: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .optional(),
  gender: z
    .string()
    .min(1, "Gender must be provided") // Adjusted the minimum length requirement
    .optional(),
  occupation: z.string().optional(),
  relationship: z.string().optional(),
  education: z.string().optional(),
  age: z.string().optional(),
  image: z.string().optional(),
  phone: z.string().optional(),
  preferredCommunicationMethod: z.string().optional(),
  preferredLanguage: z.string().optional(),
});

export type IAccountSchema = z.infer<typeof accountSchema>;

// Define the type for the update data, making all properties optional
export type UpdateDataType = Partial<IAccountSchema>;
