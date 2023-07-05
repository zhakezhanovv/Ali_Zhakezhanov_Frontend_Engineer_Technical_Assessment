import { Modal } from '@/shared/ui'
import { useAppDispatch, useAppSelector } from '@/store'
import { setModal } from '@/store/modal'

import { MusicDetailsContent } from './modals'

export function AppModal() {
	const { type } = useAppSelector((state) => state.modal)
	const dispatch = useAppDispatch()

	const handleModalClose = () => {
		dispatch(setModal(null))
	}

	return (
		<Modal.Container isOpen={!!type} onClose={handleModalClose}>
			<Modal.Overlay onClose={handleModalClose} />
			<>{type === 'music-details' ? <MusicDetailsContent /> : null}</>
		</Modal.Container>
	)
}
