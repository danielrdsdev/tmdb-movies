import { apiToken, apiUrl } from '@/utils/env'
import ky from 'ky'

export const api = ky.create({
	prefixUrl: apiUrl,
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${apiToken}`,
	},
	cache: 'force-cache',
	next: {
		revalidate: 60, // revalidate cache every 60 seconds
	},
})