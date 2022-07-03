import axios from "axios";

let headers = {
    "X-Cosmos-Token": 'bVSbEP7GioZsYz_S2DNTxw',
    "UserAgent": "Cosmos-API-Request"
}

export const cosmosApi = axios.create({
    baseURL: 'https://api.cosmos.bluesoft.com.br',
    headers
})