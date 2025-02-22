class Stacked {
    constructor(obj) {
        //PROPERTIES//

        //postion 
        this.x = obj.x;
        this.y = obj.y;

        //data
        this.data = obj.data;
        this.yVal = obj.yVal;
        this.xVal = obj.xVal;
        this.yValTotal = obj.yValTotal;
        this.yValTotalXpadding = obj.yValTotalXpadding;
        this.yValTotalYpadding = obj.yValTotalYpadding;


        this.Hight = obj.Hight;
        this.Width = obj.Width;

        //bars
        this.barHight = obj.barHight;
        this.barWidth = obj.barWidth;
        this.margin = obj.margin;
        this.axisLineThickness = obj.axisLineThickness;

        //colors
        this.axisLineColor = obj.axisLineColor;
        this.barColour = obj.barColour;
        this.axisTextColour = obj.axisTextColour;
        this.barColours = obj.barColours || [
            "#FF5733", // orange
            "#33FF57", //  light green
        ];


        //logic
        let numberOfBars = this.data.length;
        let chartSideMargins = this.margin * 2;
        let numberOfMetrics = this.yVal.length;
        let maxVals = [];


        // thins grabs all yVal and stores them inside of maValues array. 
        this.yVal.forEach((value) => {
            maxVals.push(this.data.map((row) => row[value]));
        });

        let maxVal = max(maxVals.flat(5));
        console.log(maxVals);
        this.scaler = this.Hight / maxVal;
        this.gap = (this.Width - (numberOfBars * this.barWidth * numberOfMetrics) - chartSideMargins) / (numberOfBars - 1);


    }


    render() {

        //im going to killmyself i littraly dont know how to make this stack lmao 
        push()
        translate(this.x, this.y);
        noFill();
        stroke(this.axisLineColor);
        strokeWeight(this.axisLineThickness);
        line(0, 0, 0, -this.Hight);
        line(0, 0, this.Width, 0);

        this.axisLineColor = color(100);
        this.axisTextColour = color(125);

        push();




        translate(this.margin, 0);



        //this is the nested for loop that will enable me kiki to draw the bars nessesary for the stacked bar chart
        //keep in mind nested for loops work like this. for every iteration the outer loop runs the ineer will do a full cycle!!!!!!!!!!!!!!
        //this is hop it works:

        //we have an inner and outer for loop. the outer for loop cycles through the ages and the inner cycles through the gender
        //so on interation 0 the outer will run once and the inner will run twice beccuase it gets the two genders available from yVal
        for (let outerLoopCount = 0; outerLoopCount < this.data.length; outerLoopCount++) {

            push();
            //this will set the bars 
            translate((this.gap + this.barWidth * this.yVal.length) * outerLoopCount, 0);

            for (let InnerLoopCount = 0; InnerLoopCount < this.yVal.length; InnerLoopCount++) {
                noStroke();

                //cycle through my colors 
                fill(this.barColours[InnerLoopCount % this.barColours.length]);

                rect(this.barWidth * InnerLoopCount, 0, this.barWidth, -this.data[outerLoopCount][this.yVal[InnerLoopCount]] * this.scaler);

                fill(this.axisTextColour);
                noStroke();
                textAlign(LEFT, CENTER);
                textSize(12);


                push();
                translate(this.barWidth, 10);
                rotate(90);
                text(this.data[outerLoopCount][this.xVal], 0, 0);
                pop();


            }
            pop();
        }

        console.log(this.barWidth)
        push();
        textSize(30)
        translate(this.Width / 2, 10);
        rotate(360);

        text(this.yValTotal, this.yValTotalXpadding, this.yValTotalYpadding);
        pop();


        pop();
        pop();

    }



}





