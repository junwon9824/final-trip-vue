// mountain.js
import { localAxios } from "@/util/http-commons";

const local = localAxios();

function allMountain(param, success, fail) {
    local.get(`/mountain/all`, { params: param }).then(success).catch(fail);
}

function detailMountain(mountainno, success, fail) {
    local.get(`/mountain/${mountainno}`).then(success).catch(fail);
}


function registerMountain(mountain, success, fail) {
    console.log("mountain.js mountain", mountain);
    local.post(`/mountain`, JSON.stringify(mountain)).then(success).catch(fail);
}

function getModifyMountain(mountainno, success, fail) {
    local.get(`/mountain/modify/${mountainno}`).then(success).catch(fail);
}

function modifyMountain(mountain, success, fail) {
    local.put(`/mountain`, JSON.stringify(mountain)).then(success).catch(fail);
}

function deleteMountain(mountainno, success, fail) {
    local.delete(`/mountain/${mountainno}`).then(success).catch(fail);
}

export {
    allMountain,
    detailMountain,
    registerMountain,
    getModifyMountain,
    modifyMountain,
    deleteMountain,
};
