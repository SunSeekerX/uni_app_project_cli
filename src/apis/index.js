import { expressRequest } from '@/utils/request'

export const getApi = () => expressRequest({ url: '/get', method: 'GET', header: { headerParam1: 'headerParam1' } })
export const postApi = () => expressRequest({ url: '/post', method: 'POST' })
export const putApi = () => expressRequest({ url: '/put', method: 'PUT' })
export const deleteApi = () => expressRequest({ url: '/delete', method: 'DELETE' })
export const uploadApi = () => expressRequest({ url: '/upload', method: 'UPLOAD' })
