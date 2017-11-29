define(["./d3.min", "qlik", "./definition",],function(echarts, qlik, definition,){
  var app = qlik.currApp();
  return{
    definition: definition,
    initialProperties: {
      qHyperCubeDef: {
        qInitialDataFetch: [
          {
            qTop: 0,
            qLeft: 0,
            qWidth: 10,
            qHeight: 1000
          }
        ]
      }
    },
    snapshot : {
      canTakeSnapshot : true
    },
    paint: function($element, layout){
      
    }
  }
});
