var seasonExpanded = 0;
var waterExpanded = 0;
var spaceExpanded = 0;

// text that will be expanded for seasons

function expandSeason() {
    const seasonText = document.getElementById("seasonText");
    const seasonExpand = document.getElementById("seasonExpand");
    if (seasonExpanded == 0) {
        seasonExpanded = 1;
        seasonExpand.innerHTML = "Hide Growing Season";
        seasonText.innerHTML = "Basil is a warm-season herb that grows best from late spring through summer. It should be planted after the last frost, when temperatures stay above 10 degrees celsius. Basil thrives in full sun and warm weather between 21-32 degrees celsius. However, it is sensitive to cold, won't survive frost, and is typically grown as an annual.";      
    } else if (seasonExpanded == 1) {
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
        waterText.innerHTML = "Basil needs consistent, balanced watering to thrive. In pots, water every 1-2 days; in garden beds, every 2-3 days, adjusting for heat and soil. Water deeply at the base with room temperature water, and avoid wetting the leaves. Underwatered basil droops; overwatered basil turns yellow or wilts in soggy soil. Morning is best for watering, and good drainage is essential. If the soil is dry up to your first knuckle, it's time to water. In hot weather, basil may need watering twice a day; less often in cooler conditions.";      
    } else if (waterExpanded == 1) {
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
        spaceText.innerHTML = "Basil needs at least six hours of direct sunlight daily, ideally in a sunny garden spot or near a south or west-facing window indoors. Space the plants 10-12 inches apart for good airflow, or use a 6-8 inch pot with drainage for single plants. Basil prefers warm temperatures and should be kept away from cold drafts. Rotating indoor plants regularly helps ensure even growth.";      
    } else if (spaceExpanded == 1) {
        spaceExpanded = 0;
        spaceExpand.innerHTML = "Placement";
        spaceText.innerHTML = "";
    }
}