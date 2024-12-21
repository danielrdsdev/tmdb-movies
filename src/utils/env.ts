import { z } from 'zod'

const envSchema = z.object({
	API_TOKEN: z.string(),
	API_URL: z.string().url(),
	NEXT_PUBLIC_VERCEL_URL: z.string().url(),
})

const env = envSchema.parse(process.env)

export const {
	API_TOKEN: apiToken,
	API_URL: apiUrl,
	NEXT_PUBLIC_VERCEL_URL: siteUrl,
} = env
