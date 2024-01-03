import axios from 'axios'

export const getContacts = async () => {
    const response = await axios({ url: `https://65940be71493b0116069cd82.mockapi.io/contacts`, method: "GET" })
    return response.data
}