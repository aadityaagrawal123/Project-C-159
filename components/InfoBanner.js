AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
        postersInfo = {
            superman:{
            description:"./assets/comic-view/superman/comic-page-1.jpg"
            },
            spiderman:{
            description:"./assets/comic-view/spiderman/comic-page-1.jpg"
            },
            "captain-aero":{
            description:"./assets/comic-view/captain-aero/comic-page-1.jpg"
            },
            "outer-space":{
            description:"./assets/comic-view/outer-space/comic-page-1.jpg"
            },
        };

        const { itemId } = this.data;

        const fadeBackgroundEl = document.querySelector("#fadeBackground");

        const item = postersInfo[itemId];
    
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", `${itemId}-banner`);
    
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 1,
            height: 1.4,
        });
        entityEl.setAttribute("material", { src: item.description });
        entityEl.setAttribute("position", { x: 0, y: 0., z: -1 });    
    
        fadeBackgroundEl.appendChild(entityEl);
    },
});