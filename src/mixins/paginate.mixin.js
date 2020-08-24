import _ from 'lodash'

export default {
  data: () => ({
    page: 1,
    pageSize: 3,
    pageCount: 0,
    allItems: [],
    items: [], // show generic array for curr page
  }),
  methods: {
    pageChangeHandler(page) {
      this.$router.push(`${this.$route.path}?page=${page}`)
      this.items = this.allItems[page - 1] || this.allItems[0]
      console.log(this.$route)
    },
    setupPagination(allItems) {
      this.allItems = _.chunk(allItems, this.pageSize)
      this.pageCount = _.size(this.allItems)
      this.items = this.allItems[this.page - 1] || this.allItems[0]
    },
  },
}
