import { instance } from '../base'
import { type AlbumResponse } from './api.h'

class AlbumApi {
	public async getAlbumsById(args: { id: number }): Promise<Array<AlbumResponse>> {
		const { id } = args
		const req = await instance.get(`/lookup?id=${id}&entity=album`)

		if (req.status === 200) {
			return req.data.results
		}

		throw new Error('status is not 200')
	}
}

export const albumApi = new AlbumApi()
