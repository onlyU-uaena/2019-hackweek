import axios from 'axios'

export let instance = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5c01297d4ed9b43d7590d554/example'
})
