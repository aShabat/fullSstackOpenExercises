import axios from 'axios'
const baseUrl = '/api/persons'

const getAllPersons = () => {
  return axios
          .get(baseUrl)
          .then(response => response.data)
}

const createPerson = (newPerson) => {
  return axios
          .post(baseUrl, newPerson)
          .then(response => response.data)
}

const deletePerson = (id) => {
  return axios
          .delete(`${baseUrl}/${id}`)
          .then(response => response.data)
}

const updatePerson = (id, newPerson) => {
  return axios
          .put(`${baseUrl}/${id}`, newPerson)
          .then(response => response.data)
}

const persons = { getAllPersons, createPerson, deletePerson, updatePerson }
export default persons