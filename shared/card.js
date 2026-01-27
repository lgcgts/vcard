
document.title = profile.name + " | Digital Card";
document.getElementById("name").textContent = profile.name;
document.getElementById("designation").textContent = profile.title;
document.getElementById("company").textContent = profile.company;
document.getElementById("profileImg").src = "profile.jpg";
document.getElementById("callBtn").href = "tel:" + profile.phone;
document.getElementById("phoneText").textContent = profile.displayPhone;
document.getElementById("whatsappBtn").href = "https://wa.me/" + profile.whatsapp;
document.getElementById("workEmailBtn").href = "mailto:" + profile.emailWork;
document.getElementById("workEmailText").textContent = profile.emailWork;
document.getElementById("personalEmailBtn").href = "mailto:" + profile.emailPersonal;
document.getElementById("personalEmailText").textContent = profile.emailPersonal;
document.getElementById("locationBtn").href = profile.locationUrl;
document.getElementById("locationText").textContent = profile.locationText;
document.getElementById("websiteBtn").href = profile.website;
document.getElementById("websiteText").textContent =
profile.website.replace("https://", "").replace("http://", "");

