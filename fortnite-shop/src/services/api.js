import {API_URL,HEADERS} from './config'

const getShop = async (lang='en') => {
    const response = await fetch(`${API_URL}shop?lang=${lang}`,HEADERS)
    return await response.json()
}

export {getShop}