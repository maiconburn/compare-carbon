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
        return axios.get('api/hello')
                .then(res => res.data.data)
    }

    getCustomersXLarge() {
        return axios.get('json/customers-xlarge.json')
                .then(res => res.data.data)
    }
}

