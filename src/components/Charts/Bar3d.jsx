import Chart from 'fusioncharts/fusioncharts.charts';
import FusionCharts from 'fusioncharts';
import PropTypes from 'prop-types';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Chart);

const Bar3d = ({ data }) => {
	const chartConfigs = {
		type: 'bar3d',
		width: '100%',
		height: '400',
		dataFormat: 'json',
		dataSource: {
			chart: {
				caption: 'Most Popular',
				yAxisName: 'Forks',
				xAxisName: 'Repos',
				yAxisNameFontSize: '16px',
				xAxisNameFontSize: '16px',
			},
			data,
		},
	};
	return <ReactFC {...chartConfigs} />;
};

Bar3d.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default Bar3d;
