import axios from 'axios'

import { ENV } from '../config'

export const instance = axios.create({
	baseURL: ENV.API_URL,
})
