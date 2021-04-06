import axios from 'axios'
import {BASE_URL} from '../utils/constants'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const getData = async (mUrl: string) => {
  const response = await api.get(mUrl)
  return await response.data
}

export default api

export {getData}
