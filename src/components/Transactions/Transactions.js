import PropTypes from 'prop-types';

import './transactions.css';

const Transactions = ({items, id}) => {

    const transactionList = items.map((item) => {

        return (
            <tbody class="row">
                <tr>
                    {id}
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
                {/* <tr>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr> */}
            </tbody>
        )
    })

    console.log(transactionList);

    return (
        <table class="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            {transactionList}
        </table>
        
    )
};

Transactions.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
};

export default Transactions;