import { Post } from '../../constant/request'
import AsyncStorage from '@react-native-community/async-storage';

const link = endpoint => {
    return `auth/${endpoint}`
}

export const sign_up = (data) => async (dispatch) => {
    const post = await Post('register', data)
    return post.data
}

export const sign_in = (data) => async (dispatch) => {
    const post = await Post(link('login'), data)

    if (post.data.err) {
        return post.data
    }
    if (!post.data.err) {
        await AsyncStorage.setItem('login_data', JSON.stringify({
            id: post.data.userData.id,
            email: post.data.userData.email,
            username: post.data.userData.username,
            type: post.data.type,
            typeCode: post.data.type[0].toUpperCase()
        }))
        await AsyncStorage.setItem('user_token', post.data.token)
    }
    return post.data
}

export const sign_out = (data) => async (dispatch) => {
}
