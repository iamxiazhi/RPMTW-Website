/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-undef */

let getData = (url, token = null) => $.ajax({
    type: "GET",
    headers: {
        "Authorization": `Bearer ${token || getCookie("crowdinToken")}`,
    },
    url: `${Sets.CrowdinBaseAPI}${url}`,
    success: (res) => res
});


module.exports = {
    getData: getData,
    functions: {
        /* 抓取目錄 */
        getDirectories: (Version = "1.17", filter = "", page = 1,) =>
            getData(`/projects/${Sets.CrowdinID}/directories?directoryId=${Sets.VersionDirID[Version]}&offset=${page * 30}&limit=${30}${(filter && ("&filter=" + "filter")) || ''}`),
        /* 抓取模組資料 */
        getCurseForgeModInfo: (modId) =>
            $.getJSON(`/api/addon/${modId}`),
    }
}