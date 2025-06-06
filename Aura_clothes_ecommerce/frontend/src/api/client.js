import axios from 'axios'

const client=axios.create({
    baseURL: 'http://localhost:5050/aura/api/v1',
})
export default client