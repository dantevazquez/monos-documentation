document.addEventListener("DOMContentLoaded", function () {
  function setExternalLinksTarget() {
    var links = document.links;
    for (var i = 0; i < links.length; i++) {
      if (links[i].hostname !== window.location.hostname && links[i].hostname !== "") {
        links[i].target = "_blank";
        links[i].rel = "noopener noreferrer";
      }
    }
  }

  setExternalLinksTarget();

  if (typeof location$ !== "undefined") {
    location$.subscribe(function () {
      setExternalLinksTarget();
    });
  }
});
