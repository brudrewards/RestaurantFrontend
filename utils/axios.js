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
    return restaurantApi.post('/login', {
      email,
      password,
      device_token: deviceToken,
    })
  } catch (er) {
    return er
  }
}
export const signUp = ({ email }) => {
  try {
    return restaurantApi.post('/signup', {
      email,
    })
  } catch (er) {
    return er
  }
}
export const otpCheck = ({ id, otp }) => {
  try {
    return restaurantApi.post('/otp-check', {
      id,
      otp,
    })
  } catch (er) {
    return er
  }
}

export const resendOtp = ({ id, otp }) => {
  try {
    return restaurantApi.post('/resend-otp', {
      id,
    })
  } catch (er) {
    return er
  }
}

export const resetPassword = ({ id, newPassword, confirmPassword }) => {
  try {
    return restaurantApi.post('/reset-password', {
      id,
      new_password: newPassword,
      confirm_password: confirmPassword,
    })
  } catch (er) {
    return er
  }
}

export const setupCafe = ({
  id,
  restaurantName,
  managerName,
  countryCode = 1,
  phone,
  fullAddress,
  city,
  state,
  latitude,
  longitude,
  image = '',
  images = [],
  about = '',
}) => {
  try {
    return restaurantApi.post('/setup-cafe', {
      id,
      restaurant_name: restaurantName,
      manager_name: managerName,
      country_code: countryCode,
      phone_number: phone,
      full_address: fullAddress,
      city,
      state,
      lattitude: latitude,
      longitude,
      image,
      images,
      about,
    })
  } catch (er) {
    return er
  }
}

export const editCafe = ({ id }) => {
  try {
    return restaurantApi.post('/setup-cafe', {
      id,
    })
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
