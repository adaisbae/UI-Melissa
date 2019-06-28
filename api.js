const dontationTotal = document.getElementById('donation-total');

axios.get('https://donor-manage-bw.herokuapp.com/api/donations/total').then((response) => {dontationTotal.textContent = response.data.total})