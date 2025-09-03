import axios from "axios";

let orders = {
    $AAPL: [
        'Mar 21',
        'Jun 21',
        'Sep 21',
        'Dec 21',
        'Mar 22',
        'Jun 22',
        'Sep 22',
        'Dec 22',
        'Mar 23',
        '""',
        '2 Nov 23',
        '3 Aug 23',
        '1 Feb 24',
        '2 Mai 24',
        '1 Aug 24',
        '31 Oct 24',
        '30 Jan 25',
        '1 Mai 25',
        '31 Jul 25',
    ],
    $NVDA: [
        '18 Nov 20',
        '24 Feb 21',
        '26 May 21',
        '18 Aug 21',
        '17 Nov 21',
        '16 Feb 22',
        '25 May 22',
        '24 Aug 22',
        '16 Nov 22',
        '22 Feb 23',
        '24 May 23',
        '23 Aug 23',
        '21 Nov 23',
        '21 Feb 24',
        '23 May 24',
        '28 Aug 24',
        '20 Nov 24',
        '26 Feb 25',
        '28 May 25'
    ]
};

class StockService {
    constructor() {
        this.apiClient = axios.create({
            baseURL: 'https://sheetdb.io/api/v1/pnbmischjggep'
        });
    }

    async fetchData(sheetName) {
        let response = await this.apiClient.get(`?sheet=${sheetName}`);
        return response.data;
    }

    async getRevenue(sheetName, revenueRow) {
        let data = await this.fetchData(sheetName);
        return orders[sheetName].map(key => data[revenueRow][key]);
    }
}

export let stockService = new StockService();

