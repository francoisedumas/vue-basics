const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The final empire',
      author: 'Jack Sparrow',
      age: 45,
      x: 0,
      y: 0,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true },
        { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false },
        { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true },
      ],
      url: 'http://www.me.com'
    }
  },
  methods: {
    changeTitle(title) {
      this.title = title
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(e, data) {
      console.log('event')
      if(data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX,
      this.y = e.offsetY
    },
    toggleFav(book) {
      console.log(book.isFav)
      book.isFav = !book.isFav
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    },
    filteredBooksRemain() {
      return this.books.filter((book) => !book.isFav)
    }
  }
})

app.mount('#app')