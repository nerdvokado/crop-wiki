var seasonExpanded = 0;
var waterExpanded = 0;
var spaceExpanded = 0;

function expandSeason() {
    const seasonText = document.getElementById("seasonText");
    const seasonExpand = document.getElementById("seasonExpand");
    if (seasonExpanded === 0) {
        seasonExpanded = 1;
        seasonExpand.innerHTML = "Hide Growing Season";
        seasonText.innerHTML = "Radishes grow best in cool weather, typically during early spring and fall. They can be planted as soon as the soil is workable, about 4-6 weeks before the last spring frost. Ideal temperatures range from 10-20 degrees celsius. Hot weather can cause them to bolt or become woody.";      
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
        waterText.innerHTML = "Radishes need consistent moisture to develop tender roots. Water regularly to keep the soil evenly moist but not soggy. Inconsistent watering can lead to splitting or pithy roots. Mulching helps retain moisture and regulate soil temperature.";
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
        spaceText.innerHTML = "Plant radishes in full sun or light shade with well-draining soil. Space seeds 1 inch apart in rows 12 inches apart. Thin seedlings to 2 inches once they sprout to allow room for root development. Avoid overcrowding for best shape and size.";
    } else {
        spaceExpanded = 0;
        spaceExpand.innerHTML = "Placement";
        spaceText.innerHTML = "";
    }
}
