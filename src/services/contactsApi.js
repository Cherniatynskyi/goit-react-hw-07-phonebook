import axios from 'axios'

export const getContacts = async () => {
    const response = await axios({ url: `https://65940be71493b0116069cd82.mockapi.io/contacts`, method: "GET" })
    return response.data
}

export const addContact = async ({name, phone}) => {
    await axios.post('https://65940be71493b0116069cd82.mockapi.io/contacts', {name, phone})
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        console.log(error);
      });  
}

export const deleteContact = async (id) => {
    await axios.delete(`https://65940be71493b0116069cd82.mockapi.io/contacts/${id}`)
    .then(response => {
        return response
    })
    .catch(error => {
      console.error(error);
    });
    
}