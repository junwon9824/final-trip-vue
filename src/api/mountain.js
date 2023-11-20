// mountain.js

import { localAxios } from '../util/http-commons';

const local = localAxios();

function getAllMountains(param, success, fail) {
  local.get(`/mountain/all`, { params: param }).then(success).catch(fail);
}

function addMountain(mountain, success, fail) {
  console.log('mountain.js mountain', mountain);
  local.post(`/mountain/add`, mountain).then(success).catch(fail);
}

function getUnconqueredMountains(param, success, fail) {
  local.get(`/mountain/unconquered`, { params: param }).then(success).catch(fail);
}

function getUnconqueredMountainsAscendingByHeight(memberId, success, fail) {
  local.get(`/mountain/unconquered/ascending`, { params: memberId }).then(success).catch(fail);
}

function getNearestUnconqueredMountains(memberId, success, fail) {
  local.get(`/mountain/unconquered/nearest`, { params: memberId }).then(success).catch(fail);
}

function getSearchResult(word, success, fail) {
  local.get(`/mountain/search`, { params: { word } }).then(success).catch(fail);
}

function listSido(success, fail) {
  local.get(`mountain/sido`).then(success).catch(fail);
}

function listGugun(param, success, fail) {
  local.get(`mountain/gugun`, { params: param }).then(success).catch(fail);
}
async function getMountainList(sidogugun, success, fail) {
  await local.get(`/mountain/getmountainlist`, { params: sidogugun }).then(success).catch(fail);
}

function AddconqueredMountain(param, success, fail) {
  local.post(`mountain/add/conqueredMountain`,   { params: param } ).then(success).catch(fail);
}


function getSearchResultdetail(param, success, fail) {
  local.post(`mountain/add/conqueredMountain`,   { params: param } ).then(success).catch(fail);
}

export {
  getAllMountains,
  addMountain,
  getUnconqueredMountains,
  getUnconqueredMountainsAscendingByHeight,
  getNearestUnconqueredMountains,
  getSearchResult,
  listSido,
  listGugun,

  getMountainList,

  AddconqueredMountain,

};
