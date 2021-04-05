import axios from 'axios'
import useSWR from 'swr'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
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
