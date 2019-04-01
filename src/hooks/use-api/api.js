import { request } from "../../request";

// Api object example.
export default {
  getItems: ({ params }) => request({ url: "/items", params }),
  // And so on...
}
