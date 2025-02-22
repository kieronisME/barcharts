
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

        this.barNum = this.data.length;

    };





    render() {

        push()
        translate(this.x, this.y);

        strokeWeight(this.axisLineThickness);
        stroke(this.axisLineColour);

        line(0, 0, this.Width, 0);
        line(0, 0, 0, -this.Hight);


        //orginaly i set it to width adn thats fine for the gaps going horizotaly but if we are going vertically then we need to calc the space it has going UP and use that to calc the gap
        let gap = (this.Hight - (this.data.length * this.barWidth)) / (this.data.length + 1);


        let mrMaxNumber = max(this.data.map((x) => x.Total));
        let scaler = this.Width / mrMaxNumber;



        for (let i = 0; i < this.barNum; i++) {

            let jump = (gap * (i + 1)) + (this.barWidth * i);

            // let colHight = this.data[i][this.yVal] * scaler;
            //this will determin how far the bar will og on the x axis
            let barLength = this.data[i][this.yVal] * scaler;

            stroke(this.tickColor);
            strokeWeight(this.tickStrokeWeight);
            fill(this.tickTextColor);

            //idk
            // rect(jump, 0, this.barWidth, -colHight);
            rect(0, -jump - this.barWidth, barLength, this.barWidth);


            noStroke()
            fill(this.labelColor)
            textAlign(LEFT, CENTER);
            let labels = this.data.map((x) => x[this.xVal])

            push()

            //idk
            // translate(jump + this.barWidth / 2,this.labelPadding)
            translate(-this.labelPadding, -jump - this.barWidth / 2)

            rotate(this.labelRotation)


            //idk
            // text(labels[i], -0, 0)
            pop()

        }



        //change to width
        let tickGap = this.Width / this.numTicks;


        for (let i = 0; i <= this.numTicks; i++) {
            noFill();
            stroke(this.tickColor);
            strokeWeight(this.tickStrokeLength);

            //idk
            // line(0, -i * tickGap, -this.tickStrokeLength, -i * tickGap)
            line(i * tickGap, 0, i * tickGap, this.tickStrokeLength);


            fill(this.tickTextColor);
            textAlign(CENTER, TOP);
            textSize(15);
            let value = mrMaxNumber / this.numTicks * i;

            //idk
            // text(value.toFixed(this.tickDecimal), -this.tickPadding, -i * tickGap);
            text(value.toFixed(this.tickDecimal), i * tickGap, this.tickPadding);
        }
        pop()
        pop()


    }



}








