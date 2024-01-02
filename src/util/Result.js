import Result1 from "./Result1"

function Result(prop) {
    return <div id="result">
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest (year)</th>
                    <th>Total interest</th>
                    <th>invested capital</th>
                </tr>
            </thead>
            <tbody>
                {prop.k.map((Expense) => ( 
                    <Result1
                        year={Expense.year}
                        interest={Expense.interest}
                        valueEndOfYear={Expense.valueEndOfYear}
                        totalInterest={Expense.totalInterest}
                        annualInvestment={Expense.annualInvestment}
                    />
                ))}
            </tbody>
        </table>
    </div>
}

export default Result