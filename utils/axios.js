import axios from 'axios'
const url = 'https://brud-new-1.herokuapp.com/api'

export const api = axios.create({
    baseURL: url,
})

/***********************
 * Restaurant endpoint
 ***********************/
export const restaurantApi = axios.create({
    baseURL: `${url}/restaurant`,
})

export const login = ({ email, password, deviceToken }) => {
    try {
        return ({ data } = restaurantApi.post('/login', {
            email,
            password,
            device_token: deviceToken,
        }))
    } catch (er) {
        return er
    }
}
/*****************
 * Cafe endpoint
 *****************/
export const cafeApi = axios.create({
    baseURL: `${url}/user`,
})

/******************
 * Order endpoint
 ******************/
export const orderApi = axios.create({
    baseURL: `${url}/order`,
})

/*****************
 * Card endpoint
 *****************/
export const cardApi = axios.create({
    baseURL: `${url}/card`,
})
