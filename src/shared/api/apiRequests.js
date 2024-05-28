import Cookies from "js-cookie";
import {axiosInstance} from "./axiosInstance.js";


export const apiRequests = {
    user: {
        requestCode: async (phone) => {
            return axiosInstance.post('/auth/register/request-code?type=reset_password', {
                phone
            })
        },
        confirmPassword: async (body) => {
            return axiosInstance.post('/auth/register/confirm-code?type=reset_password', body)
        },
        getData: async () => {
            return axiosInstance.get('/user/profile-get', {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`
                }
            })
        },
        resetPassword: async (body) => {
            return axiosInstance.post('/auth/confirm-reset-password', body)
        },
        authorization: async (body) => {
            return axiosInstance.post('/auth/login', body)
        },
        editData: async (body) => {
            return axiosInstance.put('/user/profile-edit', body)
        },
        updatePicture: async (data) => {
            return axiosInstance.postForm('/files/upload?document_type=avatar', data)
        },
        updatePassword: async (body) => {
            return axiosInstance.patch('/user/password-edit', body)
        },
        getPicture: async (avatarId) => {
            return axiosInstance.get(`/files/avatar/${avatarId}`, {
                responseType: 'blob'
            })
        },
        activatePremium: async () => {
            return axiosInstance.patch(`/user/premium-activation`)
        },
        trips: async () => {
            return axiosInstance.get(`/trips/get-trips?categories=roller_skates&categories=skateboard&categories=bike&categories=electric_scooters&categories=scooters&categories=unicycle`, {
                limit: 100,

            })
        }
    }
}