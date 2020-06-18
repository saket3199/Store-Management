(function() {
    const item = {};
    if (itemCount == 0) {
        document.getElementById("NoItem").style.css({
            'display': 'block',
            'font-size': '40px',
        });
    } else {
        item.name = name;
        document.getElementById("name").style.display = 'block'
        item.price = price;
        document.getElementById("price").style.display = 'block'
    }
});

function showTotal() {
    const total = [];
    items.forEach(function(item) {
        total.push(parseFloat(item.textContent));
    });
    const totalMoney = total.reduce(function(total, item) {
        total += item;
        return total;
    }, 0);
    const finalMoney = totalMoney.toFixed(2);
}