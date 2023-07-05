import { createAction, createReducer } from 'redux-act'

type ModalType = 'music-details' | 'author_details'

interface ModalState {
	type: ModalType | null
	error: string | null
}

export const setModal = createAction<ModalType | null>()

export const modalReducer = createReducer<ModalState>(
	{},
	{
		type: null,
		error: null,
	},
)

modalReducer.on(setModal, (state, payload) => ({
	...state,
	type: payload,
}))
