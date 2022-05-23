const BASE_URL = 'http://localhost:8000';
const GET_GOODS_ITEMS = `${BASE_URL}goods`
//const GET_BASKET_GOODS_ITEMS = `${BASE_URL}getBasket.json`

function service(url) {
  return fetch(url)
    .then((res) => res.json())
}

function init() {
  const Search = Vue.component('search', {
    props: [
      'value'
    ]
    template:
      <div class="search">
        <input type="text" class="goods-search" value="value" @input="$emit('input', $event.target.value)" />
        <custom-button v-on:click="$emit('searchclick')>Искать</custom-button>
      </div>
  )
}
const BasketItem = Vue.component('basket-item', {
  props: [
    'item'
  ],
  template:
    <div class="basket-item">
        <div class="basket-item_field">
          <span class="basket-item__title">{{ item.data.product_name }}</span>
          <span class="basket-item__price">({{ item.data.price }})</span>
        </div>
        <div> class="basket-item__count">
          <span>{{ item.count }}шт.</span>
          <button>+</button>
          <button>-</button>
        </div>
        <div class="basket-item__total">Всего: {{ item.total }}</div>
      </div>
  })
  const CustomButton = Vue.component('custom-button', {
    template:
      <button class="search-button custom-button" type="button" v-on:click=$emit('click')">
      < slot ></slot >
  </button >
})
const basketGoods = Vue.component('basket-goods', {
  data() {
    return {
      basketGoodsItems: []
    }
  },
  template:
    <div class="fixed-area">
      <div class="basket-card">
        <div class="basket-card__header">
          <h1 class="basket-card__header__title">basket card</h1>
          <div class="basket-card__header__delete-icon"
            v-on click="$emit('closeclick')"
          ></div>
        </div>
      </div class="basket-card__content">
      <basket-item
            :item="{
        id: '1',
      'count':10,
      'data': {
        'id':'1',
      'product_name': 'product 1',
      'price':200
      },
      'total':1000
    }"
    ></basket-item>
    <basket-item
    : item = "{
id: '1',
  'count': 10,
    'data': {
  'id': '1',
    'product_name': 'product 1',
      'price': 200
},
'total': 1000
}"
  ></basket - item >
</div >
</div >
</div >
,
  mounted(){
})
const goodsItem = Vue.component('goods-item', {
  props: [
    'item'
  ],
  template:
    <div class="goods-item">
      <p>{{ item.price }}</p>
    </div>
})
const app = new Vue({
  el: '#root',
  data: {
    items: [],
    filteredItems: [],
    search: '',
    cardIsVision: true
  },
  methods: {
    setVisionCard() {
      this.cardIsVision = !this.cardIsVision
    },
    fetchGoods() {
      service(GET_GOODS_ITEMS).then((data) => {
        this.items = data;
      })
    },
  },
  filteredItems() {
    this.filteredItems = this.items.filter(({ product_name }) => {
      return product_name.match(new RegExp(this.search, 'gui'))
    })
  },
  searchChangeHandler(value) {
    this.search = value;
  }
},
  computed: {
  calculatePrice() {
    return this.filteredItems.reduce((prev, { price }) => {
      return prev + price;
    }, 0)
  },
},
  mounted() {
  this.fetchGoods();
}
})
}
window.onload = init






