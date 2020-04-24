var erdiaoMap = {};
var yidiaoMap = {};
var ifchange = {};
ifchange = {}
var shiyixing = {};

var colormap = {
    变化检测: {
        "乔木林地": "#255862",
        "其它林地": "#507B65",
        "内陆滩涂": "#80B564",
        "农村宅基地": "#9BCC7D",
        "天然牧草地": "#C1E4B1",
        "旱地": "#DDFCBF",
        // "裸土地": "#F9F7DE",
        // "有林地": "#255862",
        // "村庄": "#88B36D",
        "裸地": "#F9F7DE"

    },
    ifchange: {
        有变化区域: "#f2b04b",
        无变化区域: "#cee8e9"
    },
    适应性: {
        不适宜: "#ea6102",
        较不适宜: "#eda14d",
        中等适宜: "#efe298",
        较适宜: "#78b96c",
        适宜: "#00913f"
    }
};

function addcolormap(id, name) {
    if (!$("#" + id).attr("map") || $("#" + id).attr("map").indexOf(name) === -1) {
        for (var key in colormap[name]) {
            $("#" + id).append($("<tr><td><div style='width: 30px;height:15px;background-color:" + colormap[name][key] + "'></div></td><td>" + key + "</td></tr>"))
        }
        $("#" + id).attr("map", ($("#" + id).attr("map") ? $("#" + id).attr("map") + "," : "") + name);
    }
}