const wrapper = document.querySelector('.wrapper')
let prods = [
    {
        img: 'https://openshop.uz/public/storage/uploads/products/photos/202209/IMZBFcMhWE1Mqk6MfRpBCNHkH7ikkLAClCcpotJX.jpg',
        name: 'Apple',
        prise: 900

    },
    {
        img: 'https://www.creditasia.uz/upload/iblock/049/b4rgas9dabfarw723jbysllxe8w394q7/smartfon-xiaomi-12-lite-6-128gb-lite-green.jpg',
        name: 'Xiaomi',
        prise: 400
    },
    {
        img: 'https://mini-io-api.texnomart.uz/catalog/product/3560/356013/192858/75fdd6eb-2d20-4e9f-8d81-67e2ac92fbdf.jpg',
        name: 'Honor',
        prise: 200,

    },

    {
        img: 'https://api.radius.uz/storage/products/January2024/iEuAdQLhfNUJ2SJ5mvFr.webp',            
        name: 'Samsung',
        prise: 600,

    },

    {
        img: 'https://lt2.pigugroup.eu/colours/596/735/43/59673543/mobilusis-telefonas-nokia-150-32-gb-24317_reference.jpg',
        name: 'Nokia',
        prise: 100

    },
    

]

prods.map( (item)=> {
    wrapper.innerHTML += `
    
    <div class="card">
        <img src=${item.img} alt="">
        <h3>${item.name} </h3>
        <h4> ${item.prise} </h4>
        <button>купить</button>
    </div>
    `
})