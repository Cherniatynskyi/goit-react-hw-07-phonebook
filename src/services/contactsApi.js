import axios from 'axios'

export const getContacts = async () => {
    const response = await axios({ url: `https://65940be71493b0116069cd82.mockapi.io/contacts`, method: "GET" })
    return response.data
}

export const addContact = async (data) => {
    const response = await fetch(`https://65940be71493b0116069cd82.mockapi.io/contacts`, {
        body: JSON.stringify(data)
    })
    return await response.json()
}

export const deleteContact = async (id) => {
    const response = await axios.delete(`https://65940be71493b0116069cd82.mockapi.io/contacts/${id}`)
    .then(res => {
      console.log(``);
    })
    .catch(error => {
      console.error(error);
    });
    return response
}