const goods = [
{ title: 'Shirt',price: 150 },
{ title: 'Socks', price: 50 },
{ title: 'Jacket', price: 350 },
{ title: 'Shoes', price: 250 },
];
let sum = 0;
function countSum(x) {
for(i=0;i<goods.length;i++) {
sum = sum + goods[i].price;
}
return sum;
};

const renderGoodsItem = (title, price) => {
return `
<div class="goods-item">
<h2>${title}</h2>
<p>${price} руб.</p>
</div>
`;
};
const renderGoodsList = (list) => {
let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
document.querySelector('.goods-list').innerHTML = goodsList.join('');
}
renderGoodsList(goods);
document.write('</br><b>Стоимость заказа: '+countSum(goods)+'руб.</b>');