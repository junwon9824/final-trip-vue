// mountain.js

import { localAxios } from "../util/http-commons";

const local = localAxios();

function getWishList(userId, success, fail) {
  local
    .get(`/wishlist/getwishlist`, { params: userId })
    .then(success)
    .catch(fail);
}

async function addWishList(wish, success, fail) {
  await local
    .post(`/wishlist/add`, wish)
    .then(success)
    .catch((error) => {
      if (error.response && error.response.status === 500) {
        // 서버에서 500 에러를 반환한 경우
        console.log(" 이미 위시리스트에 있는 산 입니다.:");
        alert(" 이미 위시리스트에 있는 산 입니다.");
        // 여기서 에러 처리 로직을 추가할 수 있습니다.
        // fail 함수 호출 등
      } else {
        // 기타 에러 처리
        console.log("Error:", error.message);
      }
      fail(error); // 에러 처리를 실패 콜백으로 전달
    });
}

async function deleteWishList(wish, success, fail) {
  await local.post(`/wishlist/delete`, wish).then(success).catch(fail);
}

export { getWishList, addWishList, deleteWishList };
