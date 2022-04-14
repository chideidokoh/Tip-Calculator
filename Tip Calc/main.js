let calculate = document.querySelector('#calculate');

calculate.addEventListener('click', () => {
    let totalBill = document.querySelector('#totalBill').value;
    let tipPercent = document.querySelector('#tipPercent').value;
    let split = document.querySelector('#split').value;

    if (totalBill === '' || tipPercent == 0 || split == 0){
    alert('Please enter value');
    return;
    };

    let total = (totalBill * tipPercent) / split
    total = total.toFixed(2);

    document.getElementById('tip').innerHTML = total;
});