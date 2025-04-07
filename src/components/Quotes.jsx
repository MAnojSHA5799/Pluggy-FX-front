import axios from 'axios';
import { useEffect, useState } from 'react';

const QuotesComponent = () => {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = () => {
    axios
      .get(`http://localhost:3001/api/quotes`)
      .then((res) => setQuotes(res.data))
      .catch((err) => console.error('Error fetching quotes:', err));
  };

  useEffect(() => {
    fetchQuotes();
    const interval = setInterval(fetchQuotes, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <span className="fs-2 me-4">💱</span>
          <h2 className="display-6 mb-0 fw-bold" style={{ color: '#ffc107' }}>USD Quotes</h2>
        </div>

        <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
          <div className="row g-4">
            {quotes.map((quote, index) => (
              <div key={index} className="col-12">
                <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
                  <div className="w-100">
                    <h6 className="mb-2 text-secondary text-center fs-5">{quote.source}</h6>
                    <div className="d-flex justify-content-center gap-5">
                      <div>
                        <span className="text-muted fs-5">Buy: </span>
                        <span className="text-dark fs-5">
                          ${quote.buy_price.toFixed(2)}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted fs-5">Sell: </span>
                        <span className="text-dark fs-5">
                          ${quote.sell_price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-muted small mt-3 text-center">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotesComponent;
