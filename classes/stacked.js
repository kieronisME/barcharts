class Stacked {
    constructor(obj) {
        //PROPERTIES//

        //data
        this.data = obj.data;
        this.yValues = obj.yValues;
        this.xValue = obj.xValue;
        this.yValueTotal = obj.yValueTotal;

        //postion 
        this.chartPosX = obj.chartPosX;
        this.chartPosY = obj.chartPosY;
        this.chartHeight = obj.chartHeight;
        this.chartWidth = obj.chartWidth;

        //bars
        this.barHight = obj.barHight;
        this.barWidth = obj.barWidth;
        this.margin = obj.margin;
        this.axisThickness = obj.axisThickness;

        //colors
        this.axisColour = obj.axisColour;
        this.barColour = obj.barColour;
        this.axisTextColour = obj.axisTextColour;
        this.barColours = obj.barColours;


        //logic
        let numberOfBars = this.data.length;
        let chartSideMargins = this.margin * 2;
        let numberOfMetrics = this.yValues.length;
        let maxValues = [];

        this.yValues.forEach((value) => {
            maxValues.push(this.data.map((row) => row[value]));
        });

        let maxValue = max(maxValues.flat(5));

        this.scaler = this.chartHeight / maxValue;
        this.gap = (this.chartWidth - (numberOfBars * this.barWidth * numberOfMetrics) - chartSideMargins) / (numberOfBars - 1);
    
    }


    render() {

        // this.barColours.push(color(125, 34, 56));
        // this.barColours.push(color(225, 34, 56));
        // this.barColours.push(color(225, 34, 156));


        this.axisColour = color(100);
        this.axisTextColour = color(125);

        push();

        translate(this.chartPosX, this.chartPosY);

        push();
        translate(this.margin, 0);



        //this is the nested for loop that will enable me kiki to draw the bars nessesary for the stacked bar chart
        //keep in mind nested for loops work like this. for every iteration the outer loop runs the ineer will do a full cycle!!!!!!!!!!!!!!
        //this is hop it works:

        //we have an inner and outer for loop. the outer for loop cycles through the ages and the inner cycles through the gender
        //so on interation 0 the outer will run once and the inner will run twice beccuase it gets the two genders available from yvalues
        for (let i = 0; i < this.data.length; i++) {

            push();
            //this will set the bars 
            translate((this.gap + this.barWidth * this.yValues.length) * i, 0);

            for (let j = 0; j < this.yValues.length; j++) {
                noStroke();

                fill(this.barColour);

                rect(this.barWidth * j, 0, this.barWidth, -this.data[i][this.yValues[j]] * this.scaler);

                fill(this.axisTextColour);
                noStroke();
                textAlign(LEFT, CENTER);
                textSize(12);


                push();
                translate(this.barWidth, 10);
                rotate(90);
                text(this.data[i][this.xValue], 0, 0);
                pop();

                

               
            }

            

            pop();
        }

    // TODO: find a way to put y axis vaalue 
        push();
        translate(this.chartPosX, 10);
        rotate(90);
        text("hiiiiiiiiiiiiiiiiiiiiiiiii",500 , 850, 0);
        pop();

        // pop out of the change which shifted our x-axis to the right
        pop();

        noFill();
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
        line(0, 0, 0, -this.chartHeight);
        line(0, 0, this.chartWidth, 0);

        // pop out of the change which shifted the origin point to 50, 350
        pop();

    }



}





