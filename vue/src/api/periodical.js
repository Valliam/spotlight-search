import api from "../utils/api"

export function periodicalList(bookName) {
  return api({
    url: '/periodical/search',
    methods: "post",
    params: {bookName}
  })
}
