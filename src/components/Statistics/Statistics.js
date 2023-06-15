import PropTypes from 'prop-types';

import "./statistics.css";

const Statistics = (props) => {
    const {title, stats} = props;

    const li = stats.map(stat => {
        return (
            <li class="stat-item">
                <span class="label">{stat.label}</span>
                <span class="percentage">{stat.percentage}</span>
            </li>  
        );        
    });
    console.log(li);


    return (
        <section class="statistics">
            {title && <h2>{title}</h2>}
             {/* <h2 class="title">{title}</h2> */}

            <ul class="stat-list">
            {/* <li class="item">
                <span class="label">{stats.label}</span>
                <span class="percentage">{stats.percentage}</span>
            </li>   
            <li class="item">
                <span class="label">{stats.label}</span>
                <span class="percentage">{stats.percentage}</span>
            </li>   
            <li class="item">
                <span class="label">{stats.label}</span>
                <span class="percentage">{stats.percentage}</span>
            </li>   
            <li class="item">
                <span class="label">{stats.label}</span>
                <span class="percentage">{stats.percentage}</span>
            </li>    */}
            {li}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number,
}

export default Statistics;