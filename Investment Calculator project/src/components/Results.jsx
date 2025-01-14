import { calculateInvestmentResults } from "../util/investment";

export default function Results({input}) {
const resultsData = calculateInvestmentResults(input);

console.log(resultsData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {/* {results.map((result, index) => {
            <tr>
                <td>{result.year}</td>
                <td>${result.valueEndOfYear}</td>
                <td>${result.interest}</td>
                <td>${result.year}</td>
                <td>${result.year}</td>
            </tr>
        })} */}
      </tbody>
    </table>
  );
}
