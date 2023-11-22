import { localAxios } from '../util/http-commons';

const local = localAxios();

function checkid(userid, success, fail) {
  local.get(`/user/checkid/${userid}`).then(success).catch(fail);
}

async function join(userinfo, success, fail) {
  await local.post(`/user/join`, userinfo).then(success).catch(fail);
}

export { checkid, join };
