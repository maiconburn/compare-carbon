import axios from 'axios'

export class CustomerService {

    getCustomersSmall() {
        return axios.get('json/customers-small.json')
                .then(res => res.data.data)
    }

    getCustomersMedium() {
        return axios.get('json/customers-medium.json')
                .then(res => res.data.data)
    }

    getCustomersLarge() {
        return axios.get('https://api.carboncertify.com/projects')
                .then(res => res.data)
    }

    getCustomersXLarge() {
        return axios.get('json/customers-xlarge.json')
                .then(res => res.data.data)
    }
}

