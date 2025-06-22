let seasonExpanded = 0;
let waterExpanded = 0;
let spaceExpanded = 0;

function expandSeason() {
    const seasonText = document.getElementById("seasonText");
    const seasonExpand = document.getElementById("seasonExpand");
    if (seasonExpanded === 0) {
        seasonExpanded = 1;
        seasonExpand.innerHTML = "Hide Growing Season";
        seasonText.innerHTML = "Garlic is typically planted in fall, a few weeks before the ground freezes, and harvested the following summer. It requires a cold period to form full bulbs, so fall planting is ideal in most climates.";
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
        waterText.innerHTML = "Water garlic regularly to keep soil lightly moist, especially during early growth. Reduce watering as bulbs mature to prevent rot. Avoid soggy conditions and ensure good drainage.";
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
        spaceText.innerHTML = "Garlic needs full sun and loose, well-drained soil. Plant cloves 4-6 inches apart and 2 inches deep, with the pointed end up. Raised beds or rows with mulch work well for moisture retention and weed control.";
    } else {
        spaceExpanded = 0;
        spaceExpand.innerHTML = "Placement";
        spaceText.innerHTML = "";
    }
}