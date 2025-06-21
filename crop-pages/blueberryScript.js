var seasonExpanded = 0;
var waterExpanded = 0;
var spaceExpanded = 0;

function expandSeason() {
    const seasonText = document.getElementById("seasonText");
    const seasonExpand = document.getElementById("seasonExpand");
    if (seasonExpanded == 0) {
        seasonExpanded = 1;
        seasonExpand.innerHTML = "Hide Growing Season";
        seasonText.innerHTML = "Blueberries are typically planted in early spring or late fall, depending on the region. They bloom in spring and bear fruit from mid to late summer. For best results, plant when the soil is workable and frost risk is minimal. Blueberries are perennial shrubs that return each year once established.";
    } else {
        seasonExpanded = 0;
        seasonExpand.innerHTML = "Growing Season";
        seasonText.innerHTML = "";
    }
}

function expandWater() {
    const waterText = document.getElementById("waterText");
    const waterExpand = document.getElementById("waterExpand");
    if (waterExpanded == 0) {
        waterExpanded = 1;
        waterExpand.innerHTML = "Hide Watering";
        waterText.innerHTML = "Blueberries require consistently moist, well-drained soil. Water them once or twice a week, depending on rainfall, ensuring about 1 to 2 inches of water per week. Drip irrigation is ideal. Avoid overwatering, as waterlogged soil can harm the roots. Mulch helps retain moisture and regulate soil temperature.";
    } else {
        waterExpanded = 0;
        waterExpand.innerHTML = "Watering";
        waterText.innerHTML = "";
    }
}

function expandSpace() {
    const spaceText = document.getElementById("spaceText");
    const spaceExpand = document.getElementById("spaceExpand");
    if (spaceExpanded == 0) {
        spaceExpanded = 1;
        spaceExpand.innerHTML = "Hide Placement";
        spaceText.innerHTML = "Blueberries need full sun for optimal fruit production. Choose a spot with well-drained, acidic soil (pH 4.5-5.5). Space bushes 4-5 feet apart, and rows 8-10 feet apart for air circulation and access. Avoid planting near trees that may compete for light or nutrients.";
    } else {
        spaceExpanded = 0;
        spaceExpand.innerHTML = "Placement";
        spaceText.innerHTML = "";
    }
}
