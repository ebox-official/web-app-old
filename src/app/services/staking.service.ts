import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StakingService {

    constructor() { }

    async getDateLimits() {

        let endpoint = 'https://www.ethbox.org/staking/fetch_data.php';

        let formData = new FormData();
        formData.append('action', 'get_date_limits');

        let response = await fetch(endpoint, { method: 'POST', body: formData });
        let { data: result } = await response.json();
        return result;
    }

    async getData(pageMonth, pageDate) {

        let endpoint = 'https://www.ethbox.org/staking/fetch_data.php';

        let formData = new FormData();
        formData.append('action', 'get_data');
        formData.append('month', pageMonth + 1);
        formData.append('day', pageDate);

        let response = await fetch(endpoint, { method: 'POST', body: formData });
        let { data: result } = await response.json();
        return result;
    }

    async getPayoutReward(address) {
        let endpoint = 'https://www.ethbox.org/api/payout.php';

        let formData = new FormData();
        formData.append('action', 'payout_get_unclaimed');
        formData.append('address', address);

        let response = await fetch(endpoint, { method: 'POST', body: formData });
        let result = await response.json();
        return result;
    }

    async setPayoutReward(address) {
        let endpoint = 'https://www.ethbox.org/api/payout.php';

        let formData = new FormData();
        formData.append('action', 'payout_set_claimed');
        formData.append('address', address);

        let response = await fetch(endpoint, { method: 'POST', body: formData });
        let result = await response.json();
        return result;
    }
    
}
