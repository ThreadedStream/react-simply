import React from 'react'
import Plot from 'plotly.js-dist'

class StockChart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }
    componentDidMount(){
        this.fetchStock();
    }

    fetchStock(){
        const API_KEY = "V2WF8PTZWD70QANA";
        let StockSymbol = 'FB';
        let ApiCall =  `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesLocal = [];
        let stockChartYValuesLocal = [];
        fetch(ApiCall)
            .then(
                function(response){
                    return response.json();
                }
            )
            .then(
                function(data){
                    console.log(data);

                    for (var key in data['Time Series (Daily)']){
                        stockChartXValuesLocal.push(key);
                        stockChartYValuesLocal.push(data['Time Series (Daily)'][key]['1. open']);
                    }
                    this.setState({
                        stockChartXValues: stockChartXValuesLocal,
                        stockChartYValues: stockChartYValuesLocal
                    });
                }
            )
    }
    render(){
        return (
            <div>
                <h1>A bit of charts</h1>
                <Plot 
                    data={[
                        {
                            x: this.state.stockChartXValues,
                            y: this.state.stockChartYValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: 'red'}

                        }
                    ]}
                    layout={{width: 720, height: 440, title: 'A fancy plot'}}
                />
            </div>
        )
    }
}

export default StockChart;
