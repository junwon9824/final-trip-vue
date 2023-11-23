import { localAxios } from '../util/http-commons';

const local = localAxios();

function checkid(userid, success, fail) {
  local.get(`/user/checkid/${userid}`).then(success).catch(fail);
}

async function join(userinfo, success, fail) {
  await local.post(`/user/join`, userinfo).then(success).catch(fail);
}

async function login(userinfo, success, fail) {
  await local.post(`/user/login`, userinfo).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  local.defaults.headers['Authorization'] = sessionStorage.getItem('accessToken');
  await local.get(`/user/info/${userid}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  local.defaults.headers['refreshToken'] = sessionStorage.getItem('refreshToken'); //axios header에 refresh-token 셋팅
  await local.post(`/user/refresh`, user).then(success).catch(fail);
}

async function logout(userid, success, fail) {
  await local.get(`/user/logout/${userid}`).then(success).catch(fail);
}

export { checkid, join, login, findById, tokenRegeneration, logout };
