import axios from 'axios';
import { useEffect, useState } from 'react';

const AverageComponent = () => {
  const [average, setAverage] = useState(null);

  const fetchAverage = () => {
    axios
      .get(`http://localhost:3001/api/average`)
      .then((res) => setAverage(res.data))
      .catch((err) => console.error('Error fetching average:', err));
  };

  useEffect(() => {
    fetchAverage();
    const interval = setInterval(fetchAverage, 15000);
    return () => clearInterval(interval);
  }, []);

  if (!average) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 text-warning fw-bold">📊 Average Prices</h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card text-center shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-secondary">USD Market Average</h5>
              <p className="mb-1">
                <strong>Buy:</strong> ${average.average_buy_price}
              </p>
              <p>
                <strong>Sell:</strong> ${average.average_sell_price}
              </p>
            </div>
            <div className="card-footer text-muted small">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageComponent;
