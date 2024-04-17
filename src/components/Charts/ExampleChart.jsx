import Chart from 'fusioncharts/fusioncharts.charts';
import FusionCharts from 'fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import PropTypes from 'prop-types';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const chartData = [
	{
		label: 'HTML',
		value: '13',
	},
	{
		label: 'CSS',
		value: '23',
	},
	{
		label: 'JavaScript',
		value: '74',
	},
];

const ChartComponent = ({ data = chartData }) => {
	const chartConfigs = {
		type: 'column3d',
		width: '400',
		height: '400',
		dataFormat: 'json',
		dataSource: {
			chart: {
				caption: 'Countries With Most Oil Reserves [2017-18]',
				subCaption: 'In MMbbl = One Million barrels',
				xAxisName: 'Country',
				yAxisName: 'Reserves (MMbbl)',
				numberSuffix: 'K',
				theme: 'fusion',
			},
			data,
		},
	};
	return <ReactFC {...chartConfigs} />;
};

ChartComponent.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default ChartComponent;
