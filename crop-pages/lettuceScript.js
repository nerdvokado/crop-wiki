let seasonExpanded = 0;
let waterExpanded = 0;
let spaceExpanded = 0;

function expandSeason() {
    const seasonText = document.getElementById("seasonText");
    const seasonExpand = document.getElementById("seasonExpand");
    if (seasonExpanded === 0) {
        seasonExpanded = 1;
        seasonExpand.innerHTML = "Hide Growing Season";
        seasonText.innerHTML = "Lettuce grows best in cool weather during spring and fall. It prefers temperatures between 10–20°C (50–68°F) and may bolt in heat. Succession planting ensures a steady harvest.";
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
        waterText.innerHTML = "Keep soil consistently moist for tender lettuce leaves. Water regularly, especially during dry spells, but avoid waterlogging. A light mulch helps retain moisture and prevent drying out.";
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
        spaceText.innerHTML = "Lettuce needs full sun to partial shade and loose, fertile soil. Space plants 6–12 inches apart depending on variety. Raised beds or containers work well if drainage is good.";
    } else {
        spaceExpanded = 0;
        spaceExpand.innerHTML = "Placement";
        spaceText.innerHTML = "";
    }
}
