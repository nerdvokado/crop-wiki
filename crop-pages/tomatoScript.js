var seasonExpanded = 0;
var waterExpanded = 0;
var spaceExpanded = 0;

function expandSeason() {
    const seasonText = document.getElementById("seasonText");
    const seasonExpand = document.getElementById("seasonExpand");
    if (seasonExpanded == 0) {
        seasonExpanded = 1;
        seasonExpand.innerHTML = "Hide Growing Season";
        seasonText.innerHTML = "Tomatoes are best grown in warm weather, typically planted in late spring after the danger of frost has passed. They thrive in temperatures between 21-29 degrees celsius and require full sun. Tomatoes are sensitive to cold, so early planting should only be done indoors or in greenhouses.";      
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
        waterText.innerHTML = "Tomatoes need deep, regular watering - about 1-1.5 inches per week. Water at the base to avoid fungal diseases on the leaves. Early in the season, water plants daily in the morning. Once established, water every 2-3 days depending on weather. Avoid fluctuations that can lead to blossom-end rot.";      
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
        spaceText.innerHTML = "Tomatoes need at least 6-8 hours of direct sunlight daily and grow best in rich, well-draining soil. Space determinate varieties 18-24 inches apart and indeterminate types 24-36 inches apart. Support them with cages or stakes, and avoid planting near potatoes or corn to reduce pest risks.";      
    } else {
        spaceExpanded = 0;
        spaceExpand.innerHTML = "Placement";
        spaceText.innerHTML = "";
    }
}
