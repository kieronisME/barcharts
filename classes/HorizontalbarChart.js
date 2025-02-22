class HorizontalbarChart {
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
        // - xval
        this.move_Xval_xAxis = obj.move_Xval_xAxis;
        this.move_Xval_yAxis = obj.move_Xval_yAxis;
        this.xValColor = obj.xValColor
        // - yval
        this.move_Yval_xAxis = obj.move_Yval_xAxis;
        this.move_Yval_yAxis = obj.move_Yval_yAxis;
        this.yValColor = obj.yValColor

        //lines
        this.axisLineThickness = obj.axisLineThickness;
        this.axisLineColour = obj.axisLineColour;

        //bars
        this.barWidth = obj.barWidth;
        this.barColor = obj.barColor;
        this.numBar = obj.numBar
        this.barNum = this.data.length;


        //titles
        this.titleText = obj.titleText;
        this.xTitleOffset = obj.xTitleOffset;
        this.yTitleOffset = obj.yTitleOffset;

        //ticks
        this.numTicks = obj.numTicks;
        this.tickDecimal = obj.tickDecimal;
        this.titleColor = obj.titleColor;
        this.tickColor = obj.tickColor;
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


        //logic
        //orginaly i set it to Width adn thats fine for the gaps going horizotaly but if we are going vertically then we need to calc the space it has going UP and use that to calc the gap
        this.gap = (this.Hight - (this.data.length * this.barWidth)) / (this.data.length + 1);
        this.mrMaxNumber = max(this.data.map((x) => x.Total));
        this.scaler = this.Width / this.mrMaxNumber;
        this.tickGap = this.Width / this.numTicks;
        this.labels = this.data.map((x) => x[this.yVal])


    };





    render() {
        push()
        translate(this.x, this.y);

        this.renderAxis();
        this.renderBars();
        this.renderXAxisTitle();
        this.renderYAxisTitle();
        pop()

    }






    renderAxis() {
        push()


        strokeWeight(this.axisLineThickness);
        stroke(this.axisLineColour);

        line(0, 0, this.Width, 0);
        line(0, 0, 0, -this.Hight);

    }


    renderBars() {
        //////////////////////////////////////////////////////////   Y AXIS    ////////////////////////////////////////////////////

        for (let i = 0; i < this.barNum; i++) {

            let jump = (this.gap * (i + 1)) + (this.barWidth * i);

            // let colHight = this.data[i][this.xVal] * scaler;
            //this will determin how far the bar will og on the x axis
            let barLength = this.data[i][this.xVal] * this.scaler;

            stroke(this.tickColor);
            strokeWeight(this.tickStrokeWeight);
            fill(this.tickTextColor);


            rect(0, -jump - this.barWidth, barLength, this.barWidth);

            noStroke()
            fill(this.labelColor)
            textAlign(LEFT, CENTER);
     

            push()

            translate(-this.labelPadding, -jump - this.barWidth / 2)

            rotate(this.labelRotation)


            text(this.labels[i], 0, 0)
            pop()







        }
        pop()
        //////////////////////////////////////////////////////////   Y AXIS    ////////////////////////////////////////////////////


        //////////////////////////////////////////////////////////   X AXIS    ////////////////////////////////////////////////////
        // DRAWINFG MY LITTLE TICKS

        push()
        //change to Width


        for (let i = 0; i <= this.numTicks; i++) {
            noFill();
            stroke(this.tickColor);
            strokeWeight(this.tickStrokeWeight);


            line(i * this.tickGap, 0, i * this.tickGap, this.tickStrokeLength);


            fill(this.tickTextColor);
            textAlign(CENTER, TOP);
            textSize(15);
            let value = this.mrMaxNumber / this.numTicks * i;
            text(value.toFixed(this.tickDecimal), i * this.tickGap, this.tickPadding);

        }
        pop()
        //////////////////////////////////////////////////////////   X AXIS    ////////////////////////////////////////////////////

    }





    renderYAxisTitle() {
        noStroke()
        fill(this.yValColor)
        textAlign(LEFT, CENTER);
        text(this.yVal, this.move_Yval_xAxis, this.move_Yval_yAxis)
    }

    renderXAxisTitle() {
        noStroke()
        fill(this.yValColor)
        textAlign(LEFT, CENTER);
        text(this.xVal, this.move_Xval_xAxis, this.move_Xval_yAxis);

    }



}












