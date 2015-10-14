var d3 = require('d3');
var React = require('react');
var ReactFauxDOM = require('react-faux-dom');

var Graph = React.createClass({
    propTypes: {
        data: React.PropTypes.arrayOf(React.PropTypes.number)
    },
    render: function () {
        // This is where we create the faux DOM node and give it to D3.
        var chart = d3.select(ReactFauxDOM.createElement('div'))

        chart
            .selectAll('.bar') // Yes, CSS selectors work.
            .data(this.props.data)
            .enter().append('div')
            .classed('bar', true)
            .style('width', function (d, i) {
                // Use styles exactly as you would with D3.
                // Hyphenated names are camel cased.
                return d * 10
            })
            .text(function (d) {
                return d
            })

        // We ask D3 for the underlying fake node and then render it as React elements.
        return chart.node().toReact()
    }
});

export default () => <Graph data={[1,2,3,4]} />;

//var data = [4, 8, 15, 16, 23, 42]

//React.render(
//    React.createElement(Graph, {data: data}),
//    document.getElementById('mount-chart')
//)