let cleanedData = [];
let bubbleCharts = [];
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

    //bubble chart soon
    let Bubble01= {
    //positions

    //data


    //lines


    //bars



    //titles

    //ticks


    //labeling things


    };



    bubbleCharts.push(new Bubble(Bubble01))


}

function draw() {
    background(0)
    
    for (let i = 0; i < bubbleCharts.length; i++) {
        bubbleCharts[i].render();
    }
}







