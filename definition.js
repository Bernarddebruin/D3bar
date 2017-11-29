define([], function(){
  return {
    component: "accordion",
    type: "items",
    items: {
      dimensions: {
        uses: "dimensions",
        min: 1,
        max: 2,
      },
      measures: {
        uses: "measures",
        min: 1,
        items: {
          color: {
            ref: "qDef.Colour",
            label: "Colour",
            component: "color-picker",
            dualOutput: true,
            type: "object",
            defaultValue: {
              color: "#CCCCCC",
              index: -1
            }
          },
        }
      },
      settings: {
        uses: "settings"
      },
    }
  }
})
