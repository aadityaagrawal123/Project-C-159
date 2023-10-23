AFRAME.registerComponent("comics-posters", {
    init: function () {
      this.postersContainer = this.el;
      this.posters();
    },
  
    posters: function () {
      const posterRef = [
        {
          id: "superman",
          url: "./assets/poster/superman.jpg",
        },
        {
          id: "spiderman",
          url: "./assets/poster/spiderman.jpg",
        },
        {
          id: "captain-aero",
          url: "./assets/poster/captain aero.jpg",
        },
        {
          id: "outer-space",
          url: "./assets/poster/outerspace.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of posterRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 15;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id);
        // Thumbnail Element
        const poster = this.createPoster(item);
        borderEl.appendChild(poster);
        
        this.postersContainer.appendChild(borderEl);
      }
    },
  
    createBorder: function (position, id) {
      const entity_el = document.createElement("a-entity");
      entity_el.setAttribute("id",id);
      entity_el.setAttribute("visible",true);
      entity_el.setAttribute("geometry",{primitive:"plane", width:22, height:30});
      entity_el.setAttribute("position", position);
      entity_el.setAttribute("material",{color:"white", opacity:0.8});
      entity_el.setAttribute("cursor-listener", {});
      return entity_el;
    },
  
    createPoster: function(item) {
      const entity_el = document.createElement("a-entity");
      entity_el.setAttribute("visible",true);
      entity_el.setAttribute("geometry",{primitive:"plane", width:20, height:28});
      entity_el.setAttribute("position",{x:0, y:0, z:0.1});
      entity_el.setAttribute("material",{src:item.url});
      return entity_el;
    },

  });
  