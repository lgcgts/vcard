document.addEventListener("DOMContentLoaded", function () {
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value !== undefined && value !== null) {
      el.textContent = value;
    }
  };

  const bindAction = (anchorId, href, textEntries = []) => {
    const anchor = document.getElementById(anchorId);
    if (!anchor) return;
    if (!href) {
      anchor.style.display = "none";
      return;
    }
    anchor.href = href;
    textEntries.forEach(([id, value, useHtml]) => {
      const node = document.getElementById(id);
      if (!node || value === undefined || value === null) return;
      if (useHtml) node.innerHTML = value; else node.textContent = value;
    });
  };

  document.title = `${profile.name} | Digital Card`;

  setText("name", profile.name);
  setText("designation", profile.title);
  setText("company", profile.company);
  document.getElementById("profileImg").src = "profile.jpg";

  bindAction("callBtn", profile.phone && `tel:${profile.phone}`, [["phoneText", profile.displayPhone]]);
  bindAction("whatsappBtn", profile.whatsapp && `https://wa.me/${profile.whatsapp}`);
  bindAction("workEmailBtn", profile.emailWork && `mailto:${profile.emailWork}`, [["workEmailText", profile.emailWork]]);
  bindAction("personalEmailBtn", profile.emailPersonal && `mailto:${profile.emailPersonal}`, [["personalEmailText", profile.emailPersonal]]);

  bindAction(
    "addressBtn",
    profile.locationUrl || "#",
    [["addressText", profile.address && profile.address.replace(/\n/g, "<br>"), true]]
  );

  const businessLabel = (profile.website && profile.website.label) || "My Business";
  if (profile.locationUrl) {
    const locationLabel = profile.locationText || profile.locationUrl;
    bindAction("websiteBtn", profile.locationUrl, [["websiteText", `${businessLabel} • ${locationLabel}`]]);
  } else if (profile.website && profile.website.url) {
    bindAction(
      "websiteBtn",
      profile.website.url,
      [["websiteText", profile.website.label || profile.website.url.replace(/^https?:\/\//, "")]]
    );
  } else {
    const websiteBtn = document.getElementById("websiteBtn");
    if (websiteBtn) websiteBtn.style.display = "none";
  }
});
