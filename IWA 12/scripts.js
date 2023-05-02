const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 


//Elements by ID
const book1 = document.getElementById('book1');
const book2 = document.getElementById('book2');
const book3 = document.getElementById('book3');

// Book 1
const statusBook1 = book1.querySelector('.status');
const reserveBook1 = book1.querySelector('.reserve');
const checkoutBook1 = book1.querySelector('.checkout');
const checkinBook1 = book1.querySelector('.checkin');
statusBook1.style.color = STATUS_MAP.overdue.color;
reserveBook1.disabled = !STATUS_MAP.overdue.canReserve ? true : false;
checkoutBook1.disabled = !STATUS_MAP.overdue.canCheckout ? true : false;
checkinBook1.disabled = !STATUS_MAP.overdue.canCheckIn ? true : false;

// Book 2
const statusBook2 = book2.querySelector('.status');
const reserveBook2 = book2.querySelector('.reserve');
const checkoutBook2 = book2.querySelector('.checkout');
const checkinBook2 = book2.querySelector('.checkin');
statusBook2.style.color = STATUS_MAP.reserved.color;
reserveBook2.disabled = !STATUS_MAP.reserved.canReserve ? true : false; 
checkoutBook2.disabled = !STATUS_MAP.reserved.canCheckout ? true : false;
checkinBook2.disabled = !STATUS_MAP.reserved.canCheckIn ? true: false;

// Book 3
const statusBook3 = book3.querySelector('.status');
const reserveBook3 = book3.querySelector('.reserve');
const checkoutBook3 = book3.querySelector('.checkout');
const checkinBook3 = book3.querySelector('.checkin');
statusBook3.style.color = STATUS_MAP.shelf.color;
reserveBook3.disabled = !STATUS_MAP.shelf.canReserve ? true : false;
checkoutBook3.disabled = !STATUS_MAP.shelf.canCheckout ? true : false;
checkinBook3.disabled = !STATUS_MAP.shelf.canCheckIn ? true : false;
