var seasonExpanded = 0;
var waterExpanded = 0;
var spaceExpanded = 0;

function expandSeason() {
    const seasonText = document.getElementById("seasonText");
    const seasonExpand = document.getElementById("seasonExpand");
    if (seasonExpanded == 0) {
        seasonExpanded = 1;
        seasonExpand.innerHTML = "Hide Growing Season";
        seasonText.innerHTML = "Bell peppers grow best in warm weather, typically planted after the last frost when temperatures stay above 13°C. They require a long growing season of about 60 to 90 days with plenty of sunlight and temperatures between 21–29°C for optimal fruit development.";      
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
        waterText.innerHTML = "Bell peppers need consistent watering to keep the soil moist but not soggy. Water deeply at the base about 1-2 inches per week, adjusting for heat and rainfall. Avoid wetting the leaves to prevent disease, and mulch to retain moisture.";      
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
        spaceText.innerHTML = "Bell peppers prefer full sun (6-8 hours daily) and well-draining soil. Space plants about 18-24 inches apart in rows 24-36 inches apart to allow for good airflow. They should be protected from strong winds and cold drafts.";      
    } else {
        spaceExpanded = 0;
        spaceExpand.innerHTML = "Placement";
        spaceText.innerHTML = "";
    }
}
