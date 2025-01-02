import ky from 'ky'

import { apiToken, apiUrl } from '@/utils/env'

export const api = ky.create({
	prefixUrl: apiUrl,
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${apiToken}`,
	},
	cache: 'force-cache',
	next: {
		revalidate: 60 * 30, // revalidate cache every 30 minutes
	},
})
