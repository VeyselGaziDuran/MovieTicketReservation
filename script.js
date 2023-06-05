const container = document.querySelector('.container');
const count = document.getElementById('count');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');

container.addEventListener('click', function(e) {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        calculateTotal();
    }
});


select.addEventListener('change', function(e) {
    calculateTotal();
});

function calculateTotal() {
    const selectedSeats = container.querySelectorAll('.seat.selected');
    const selectedSeatsArr = [];
    const seatsArr = [];
    selectedSeats.forEach(function(seat) {
        selectedSeatsArr.push(seat);
    });
    
    seats.forEach(function(seat) {
        seatsArr.push(seat);
    });

    let selectedSeatsIndex = selectedSeatsArr.map(function(seat) {
        return seatsArr.indexOf(seat);
    });

    let selectedSeatCount =selectedSeats.length-1;
    count.innerText = selectedSeatCount;
    amount.innerText = select.value*selectedSeatCount;

    saveToLocalStorage(selectedSeatsIndex);
}

function saveToLocalStorage(index) {
    localStorage.setItem('selectedSeats', JSON.stringify(index));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
    localStorage.setItem('selectedMoviePrice', select.value);
}