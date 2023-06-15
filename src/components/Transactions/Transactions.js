import PropTypes from 'prop-types';

import css from './transactions.module.css';

const Transactions = ({items}) => {

    return (
        <table className={css.transaction_history}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody className={css.row}>
                {items.map((item) => (
                            <tr key={item.id}>                    
                                <td>{item.type}</td>
                                <td>{item.amount}</td>
                                <td>{item.currency}</td>
                            </tr>
                        ))}
            </tbody>
        </table>        
    )
};

Transactions.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
};

export default Transactions;