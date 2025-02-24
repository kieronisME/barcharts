let stackedcharts = []
let cleanedData = [];
let data;





function preload() {
    data = loadTable('Combined.csv', 'csv', 'header')
}

function setup() {
    createCanvas(4000, 4000)
    angleMode(DEGREES)


    for (let i = 0; i < data.getRowCount(); i++) {
        cleanedData.push(data.rows[i].obj)
    };


    // STACKED BAR CHART
    stackedBarchart = {

        //postion 
        x: 900,
        y: 650,

        Hight: 300,
        Width: 500,



        //data
        data: cleanedData,
        yVal: ["Female","Male"],
        xVal: "Age_Group",
        yValTotal: "Total",
        yValTotalXpadding: 0,
        yValTotalYpadding: 100,



        //bars
        barWidth: 18,
        margin: 15,
        axisLineThickness: 2,

        //colors
        barColour: "#FF0000",
        axisLineColor: "FF0500",
        axisTextColour: "#ffffff",
        barColours: [
            "#FF5733", // orange
            "#33FF57", // light green
        ]

    }

  
    stackedcharts.push(new Stacked(stackedBarchart))

}

function draw() {
    background(0)

    for (let i = 0; i < stackedcharts.length; i++) {
        stackedcharts[i].render();
    }


}







