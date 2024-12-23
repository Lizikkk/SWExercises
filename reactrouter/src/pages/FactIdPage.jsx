import { useParams } from 'react-router-dom';
import { Facts } from '../data/facts';

const FactIdpage = () => {
    const { factId } = useParams();
    const parsedFactId = parseInt(factId, 10);

    if (isNaN(parsedFactId)) {
        return <div>
           <h1> Invalid ID! Fact with this Id doesnt exist</h1>
            </div>;
    }

    const fact = Facts.find(fact => fact.id === parsedFactId);

    if (!fact) {
        return <div>Fact not found</div>;
    }

    return (
        <div>
            <h1>Fact #{fact.id}</h1>
            <h1>{fact.text}</h1>
        </div>
    );
};

export default FactIdpage;
