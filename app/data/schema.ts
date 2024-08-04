import { z } from "zod";

export const UserSchema = z.object({
  username: z.string().nonempty("Username is required"),
  email: z.string().email("Invalid email address"),
});

export type FormFieldUser = z.infer<typeof UserSchema>;
