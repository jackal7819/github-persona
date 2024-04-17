import Chart from 'fusioncharts/fusioncharts.charts';
import FusionCharts from 'fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import PropTypes from 'prop-types';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Pie3d = ({ data }) => {
	const chartConfigs = {
		type: 'pie3d',
		width: '100%',
		height: '400',
		dataFormat: 'json',
		dataSource: {
			chart: {
				caption: 'Languages',
				theme: 'fusion',
				decimals: '0',
				pieRadius: '45%',
				useDataPlotColorForLabels: '1',
				showValues: '1',
				showPercentValues: '0',
				showPercentInToolTip: '1',
			},
			data,
		},
	};
	return <ReactFC {...chartConfigs} />;
};

Pie3d.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default Pie3d;
