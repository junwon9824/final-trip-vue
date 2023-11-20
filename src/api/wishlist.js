// mountain.js

import { localAxios } from '../util/http-commons';

const local = localAxios();

function getWishList(userId, success, fail) {
  local.get(`/wishlist/getwishlist`, { params: userId }).then(success).catch(fail);
}

async function addWishList(wish, success, fail) {
  await local.post(`/wishlist/add`, wish).then(success).catch(fail);
}

export { getWishList, addWishList };
