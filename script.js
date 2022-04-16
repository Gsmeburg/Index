const goods = [
{ title: 'Shirt', price: 150 },
{ title: 'Socks', price: 50 },
{ title: 'Jacket', price: 350 },
{ price: 250 },
];
const renderGoodsItem = (title='Shoes', price) => {
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