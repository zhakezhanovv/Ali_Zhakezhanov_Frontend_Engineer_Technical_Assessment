import { instance } from '../base'
import type { MusicResponse } from './api.h'

class MusicApi {
	public async getMusics(args: { category: string }): Promise<Array<MusicResponse>> {
		const { category } = args

		const req = await instance.get(`/search?term=${category}`, {
			headers: {
				Accept: 'application/json',
			},
		})

		if (req.status === 200) return req.data.results
		throw new Error('status is not 200')
	}
}

export const musicApi = new MusicApi()
