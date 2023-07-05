import { musicApi, type MusicResponse } from '@/shared/api'
import { type Dispatch } from 'redux'
import { createAction, createReducer } from 'redux-act'

interface MusicState {
	musics: MusicResponse[]
	isPending: boolean
	isSuccess: boolean
	selectMusic: MusicResponse | null
	isPlaying: boolean
}

export const fetchMusicsPending = createAction()
export const fetchMusicsSuccess = createAction<MusicResponse[]>()
export const setSelectMusic = createAction<MusicResponse | null>()
export const setIsPlayMusic = createAction<boolean>()

export const fetchMusics = () => {
	return async (dispatch: Dispatch) => {
		dispatch(fetchMusicsPending())
		const musicsRes = await musicApi.getMusics({ category: 'cantonese%20pop' })
		dispatch(fetchMusicsSuccess(musicsRes))
	}
}

export const musicReducer = createReducer<MusicState>(
	{},
	{ musics: [], isPending: false, isSuccess: false, selectMusic: null, isPlaying: false },
)

musicReducer.on(fetchMusicsPending, (state) => ({ ...state, musicsPending: true }))
musicReducer.on(fetchMusicsSuccess, (state, payload) => ({ ...state, musics: payload, musicsSuccess: true }))
musicReducer.on(setSelectMusic, (state, payload) => ({ ...state, selectMusic: payload }))
musicReducer.on(setIsPlayMusic, (state, payload) => ({ ...state, isPlaying: payload }))
