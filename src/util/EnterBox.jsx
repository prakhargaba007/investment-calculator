import React, { useState } from "react"
function EnterBox(props) {
    const [x, y] = useState()
    const [x1, y1] = useState()
    const [x2, y2] = useState()
    const [x3, y3] = useState()

    let initialInvestment = (event) => {
        y(event.target.value)
    }
    let annualInvestment = (event) => {
        y1(event.target.value)
    }
    let expectedReturn = (event) => {
        y2(event.target.value)
    }
    let duration = (event) => {
        y3(event.target.value)
    }

    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    const annualData = [];

    let investmentValue = +x;
    let totalInterest = 0

    for (let i = 0; i < x3; i++) {
        let annualInvestment = +x + (+x1 * (i + 1));
        const interestEarnedInYear = (annualInvestment) * (+x2 / 100);
        totalInterest = totalInterest + interestEarnedInYear;

        investmentValue += interestEarnedInYear + +x1;

        annualData.push({
            year: i + 1, // year identifier
            interest: formatter.format(interestEarnedInYear), // the amount of interest earned in this year
            valueEndOfYear: formatter.format(investmentValue), // investment value at end of year
            totalInterest: formatter.format(totalInterest),
            annualInvestment: formatter.format(annualInvestment), // investment added in this year
        });
    }



    function xyz() {
        props.h(annualData)
    }



    return (
        <div id="user-input" onChange={xyz}>
            <div className="input-group">
                <div id="user-insput">
                    <label htmlFor="">Initial investment</label>
                    <input
                        type="number"
                        min="100"
                        step="100"
                        onChange={initialInvestment}
                        required
                    />
                </div>
                <div id="user-insput">
                    <label htmlFor="">Annual investment</label>
                    <input
                        type="number"
                        min="100"
                        step="100"
                        onChange={annualInvestment}
                        required
                    />
                </div>
            </div>
            <div className="input-group">
                <div id="user-insput">
                    <label htmlFor="">Expected returns</label>
                    <input
                        type="number"
                        step="0.1"
                        onChange={expectedReturn}
                        required
                    />
                </div>
                <div id="user-insput">
                    <label htmlFor="">Duration</label>
                    <input
                        type="number"
                        min="1"
                        step="1"
                        onChange={duration}
                        required
                    />
                </div>
            </div>
        </div>
    )
}

export default EnterBox