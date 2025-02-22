
class BarChart {
    constructor(obj) {
        //PROPERTIES//

        //positions
        this.x = obj.x;
        this.y = obj.y;
        this.Width = obj.Width;
        this.Hight = obj.Hight;
        this.margin = obj.margin;

        //data
        this.data = obj.data;
        this.xVal = obj.xVal;
        this.yVal = obj.yVal;
        this.barNum = this.data.length;

        //lines
        this.axisLineThickness = obj.axisLineThickness;
        this.axisLineColour = obj.axisLineColour;

        //bars
        this.barWidth = obj.barWidth;
        this.barColor = obj.barColor;
        this.numBar = obj.numBar


        //titles
        this.titleText = obj.titleText;
        this.xTitleOffset = obj.xTitleOffset;
        this.yTitleOffset = obj.yTitleOffset;

        //ticks
        this.numTicks = obj.numTicks;
        this.tickDecimal = obj.tickDecimal;
        this.titleColor = obj.titleColor;
        this.tickColor = obj.tickColor;
        this.tickYTextPadding = obj.tickYTextPadding;
        this.tickXTextPadding = obj.tickXTextPadding
        this.tickPadding = obj.tickPadding;
        this.tickStrokeWeight = obj.tickStrokeWeight;
        this.tickStrokeLength = obj.tickStrokeLength;
        this.tickTextColor = obj.tickTextColor;
        this.tickTextSize = obj.tickTextSize;


        //labeling things
        this.labelPadding = obj.labelPadding;
        this.labelRotation = obj.labelRotation;
        this.labelTextSize = obj.labelTextSize;
        this.labelColor = obj.labelColor;
        this.labbleTileX = obj.labbleTileX



        //logic
        //figure out this bracket part beacuse its wierd
        this.gap = (this.Width - (this.data.length * this.barWidth)) / (this.data.length + 1);
        //i promise you i dont know how this function works. WTF IS X NIGGA? when i come back i'll figure it out
        this.mrMaxNumber = max(this.data.map((x) => x.Total));

        // console.log(mrMaxNumber);
        //learn scalers in more detail
        this.scaler = this.Hight / this.mrMaxNumber;
        // console.log(scaler);

        //this is to find out how much space between ticks there should be. so if hight(the total number) was 100 and the numticks was 2 then tick gap would be 50. meaning there should be a gap of 50 between each.
        // when this goes through the for loop it will space all of the tick evenly by multipying the number of ticks by the number in tick gap 
        this.tickGap = this.Hight / this.numTicks;


    };


    // marginf left and right calc
    // adjusting y bar line to be max data.
    // i want the x axis to be a little onger than the last bar always
    // i want it so when you increas the amount in comibedcvs the x and y ajust 



    render() {
        push()
        translate(this.x, this.y);

        this.renderAxis();
        this.renderBars();  // X axis 
        this.renderTicks();  // Y axis 

    }




    renderAxis() {
        push()
        strokeWeight(this.axisLineThickness);
        stroke(this.axisLineColour);

        //put minus or my graph will be updside down
        line(0, 0, this.Width, 0);
        line(0, 0, 0, -this.Hight);
        pop()

    }


    renderBars() {
        //x Axis
        for (let i = 0; i < this.barNum; i++) {

            let jump = (this.gap * (i + 1)) + (this.barWidth * i);
            let colHight = this.data[i][this.yVal] * this.scaler;

            stroke(this.tickColor);
            strokeWeight(this.tickStrokeWeight);
            fill(this.tickTextColor);

            rect(jump, 0, this.barWidth, -colHight);
            noStroke()
            fill(this.labelColor)
            textAlign(LEFT, CENTER);
            let labels = this.data.map((x) => x[this.xVal])

            push()
            translate(jump + this.barWidth / 2, this.labelPadding)
            rotate(this.labelRotation)

            text(labels[i], 0, 0)

            pop()

            push()
            translate(this.barWidth / 2, this.labbleTileX)
            text(this.xVal, -this.tickXTextPadding, -this.Width / 2);
            pop()


        }

    }



    renderTicks() {

        // Y axis 
        for (let i = 0; i <= this.numTicks; i++) {
            noFill();
            stroke(this.tickColor);
            strokeWeight(this.tickStrokeLength);
            //                         - to draw to the left
            line(0, -i * this.tickGap, -this.tickStrokeLength, -i * this.tickGap)


            // noStroke();
            fill(this.tickTextColor);
            textAlign(RIGHT, CENTER);
            textSize(15);
            let value = this.mrMaxNumber / this.numTicks * i;
            text(value.toFixed(this.tickDecimal), -this.tickPadding, -i * this.tickGap);



            // console.log("hi",this.Hight/2)
        }

        text(this.yVal, -this.tickYTextPadding, -this.Hight / 2);

        pop()

        // draw ticks 
        // 1:
        // i <= this.numTicks;
        // the reason he put the greater than or quale sign is so it INCULDES THE NUMBER IN numTicks. like if numTicks was 5 then it will keep looping until its 5 beacvuse of greater than or quele sign. but with < it would stop at 4

        //2:
        //  line(0, -i * tickGap, -this.tickStrokeLength, -i * tickGap)
        // the starting points of my ticks is 0, -i * tickGap, and the end point is this -this.tickStrokeLength, -i * tickGap)
        // -i * tickGap ensures that my ticks are spced out evenly.
        //


        pop()
    }

}










