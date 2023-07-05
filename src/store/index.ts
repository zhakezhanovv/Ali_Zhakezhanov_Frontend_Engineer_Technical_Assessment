import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { modalReducer } from './modal'
import { musicReducer } from './music'

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
type DispatchFunc = () => AppDispatch

const reducers = combineReducers({
	music: musicReducer,
	modal: modalReducer,
})

export const store = createStore(reducers, compose(applyMiddleware(thunk)))

export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
