import Chart from 'fusioncharts/fusioncharts.charts';
import FusionCharts from 'fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import PropTypes from 'prop-types';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Doughnut2d = ({ data }) => {
	const chartConfigs = {
		type: 'doughnut2d',
		width: '100%',
		height: '400',
		dataFormat: 'json',
		dataSource: {
			chart: {
				caption: 'Languages',
				theme: 'fusion',
				decimals: 0,
				pieRadius: '50%',
				useDataPlotColorForLabels: '1',
				showValues: '0',
				showPercentInToolTip: '1',
			},
			data,
		},
	};
	return <ReactFC {...chartConfigs} />;
};

Doughnut2d.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default Doughnut2d;
