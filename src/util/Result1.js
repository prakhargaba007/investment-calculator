function Result1(props) {
    return (
        <tr>
            <td>{props.year}</td>
            <td>{props.valueEndOfYear}</td>
            <td>{props.interest}</td>
            <td>{props.totalInterest} </td>
            <td>{props.annualInvestment}</td>
        </tr>
    )
}

export default Result1