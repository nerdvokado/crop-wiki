let seasonExpanded = 0;
let waterExpanded = 0;
let spaceExpanded = 0;

function expandSeason() {
    const seasonText = document.getElementById("seasonText");
    const seasonExpand = document.getElementById("seasonExpand");
    if (seasonExpanded === 0) {
        seasonExpanded = 1;
        seasonExpand.innerHTML = "Hide Growing Season";
        seasonText.innerHTML = "Potatoes grow best in cool weather, planted in early spring after the last frost. They prefer temperatures between 10-24 degrees celsius and need around 90-120 days to mature.";
    } else {
        seasonExpanded = 0;
        seasonExpand.innerHTML = "Growing Season";
        seasonText.innerHTML = "";
    }
}

function expandWater() {
    const waterText = document.getElementById("waterText");
    const waterExpand = document.getElementById("waterExpand");
    if (waterExpanded === 0) {
        waterExpanded = 1;
        waterExpand.innerHTML = "Hide Watering";
        waterText.innerHTML = "Potatoes need consistent moisture, especially when tubers form. Water deeply once or twice a week depending on rainfall, but avoid waterlogging which can cause rot.";
    } else {
        waterExpanded = 0;
        waterExpand.innerHTML = "Watering";
        waterText.innerHTML = "";
    }
}

function expandSpace() {
    const spaceText = document.getElementById("spaceText");
    const spaceExpand = document.getElementById("spaceExpand");
    if (spaceExpanded === 0) {
        spaceExpanded = 1;
        spaceExpand.innerHTML = "Hide Placement";
        spaceText.innerHTML = "Plant potatoes in loose, well-drained soil with full sun. Space seed potatoes 12 inches apart in rows 30 inches apart to allow room for tuber growth and airflow.";
    } else {
        spaceExpanded = 0;
        spaceExpand.innerHTML = "Placement";
        spaceText.innerHTML = "";
    }
}
