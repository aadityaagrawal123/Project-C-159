AFRAME.registerComponent("cursor-listener",{
    schema: {
        selectedItemId: { default: "", type: "string" },
      },
      init: function () {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
      },
      update: function () {
        const fadeBackgroundE1 = document.querySelector("#fadeBackground");
        c = fadeBackgroundE1.children;
        if (c.length > 0) {
          var i;
          for (i=0; i<=c.length; i++){
            fadeBackgroundE1.removeChild(c[i]);
          } 
        }
        else {
          this.handleMouseClickEvents();
        }
      },
      handleComicsListState: function () {
        const id = this.el.getAttribute("id");
        const comicsId = ["superman", "spiderman", "captain-aero", "outer-space"];
        if (comicsId.includes(id)) {
          const postersContainer = document.querySelector("#posters-container");
          postersContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", {
            color: "#CA07ED",
            opacity: 1,
          });
        }
      },

      handleMouseEnterEvents: function () {
        this.el.addEventListener("mouseenter", () => {
            this.handleComicsListState();
        })
      },
      handleMouseLeaveEvents: function () {
        this.el.addEventListener("mouseleave", () => {
            const {selectedItemId} = this.data;
            if (selectedItemId) {
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if (id == selectedItemId) {
                    el.setAttribute("material", {color:"white", opacity:0.8});
            };
            };
        })
      },     
      handleMouseClickEvents: function () {
        this.el.addEventListener("click", () => {
          const { selectedItemId } = this.data;
    
          const fadeBackgroundEl = document.querySelector("#fadeBackground");
          const titleEl = document.querySelector("#app-title");
          const subtitleEl = document.querySelector("#app-subtitle");
          const cursorEl = document.querySelector("#camera-cursor");
    
          //check the selected item to set the "info-banner" component on the plane
          if (selectedItemId) {
            fadeBackgroundEl.setAttribute("visible", true);
            fadeBackgroundEl.setAttribute("info-banner", {
              itemId: selectedItemId,
            });
            titleEl.setAttribute("visible", false);
            subtitleEl.setAttribute("visible", false);
            cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
            cursorEl.setAttribute("geometry", {
              radiusInner: 0.02,
              radiusOuter: 0.03,
            });
          } else {
            //else make the plane invisible
            fadeBackgroundEl.setAttribute("visible", false);
            titleEl.setAttribute("visible", true);
            subtitleEl.setAttribute("visible", true);
            cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 });
            cursorEl.setAttribute("geometry", {
              radiusInner: 0.06,
              radiusOuter: 0.10,
            });
          }
        });
      },
  
});