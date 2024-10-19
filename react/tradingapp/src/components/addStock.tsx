import { useContext } from "react";
import { useState } from "react";
import { StocksContext } from "../store/stock.context";

function AddStock() {
    const { addNewStock } = useContext(StocksContext);
    const [stockSymbol, setStockSymbol] = useState<string | null>();
    const [stockPrice, setStockPrice] = useState<number | null>();

    const handleSymbolChange = (event: React.FormEvent<KeyboardEvent>) => {

        event.preventDefault();
        const target = event.target as typeof event.target & {
            stockSymbol: { value: string };
            stockPrice: { value: number };
        };
        const stockSymbol = target.stockSymbol.value;
        const stockPrice = target.stockPrice.value;
        setStockSymbol(stockSymbol);
        setStockPrice(stockPrice);
    };

    const handlePriceChange = (event) => {
        setStockPrice(event.target.value);
    };

    const handleAddButtonClicked = () => {
        addNewStock(stockSymbol, stockPrice);
        setStockPrice(0);
        setStockSymbol("");
    };

    return (
        <div className="container text-center">
            <div className="row kg-row">
                z   <div className="col-6">
                    <input
                        type="text"
                        placeholder="Enter Stock Here"
                        value={stockSymbol}
                        onChange={handleSymbolChange}
                    />
                </div>
                <div className="col-4">
                    <input type="number" value={stockPrice} onChange={handlePriceChange} />
                </div>
                <div className="col-2">
                    <button
                        type="button"
                        className="btn btn-success kg-button"
                        onClick={handleAddButtonClicked}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddStock;
