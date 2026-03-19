import z from "zod";

export const inputSchema = z.object({
    email: z.string(),
    password: z.string()
})

export type inputTypes = z.infer<typeof inputSchema>