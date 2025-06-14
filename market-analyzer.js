import axios from 'axios';

async function getMarketData(coin) {
    try {
        const [tickerRes, tradesRes] = await Promise.all([
            axios.get(`https://indodax.com/api/ticker/${coin}idr`),
            axios.get(`https://indodax.com/api/trades/${coin}idr`)
        ]);
        
        const ticker = tickerRes.data.ticker;
        const trades = tradesRes.data;
        
        return {
            market: coin.toUpperCase(),
            lastPrice: parseInt(ticker.last),
            high24: parseInt(ticker.high),
            low24: parseInt(ticker.low),
            trades: trades
        };
    } catch (error) {
        console.error(`Error fetching ${coin} data:`, error.message);
        return null;
    }
}

function calculateSupportResistance(trades, currentPrice) {
    if (!trades || trades.length === 0) return { support: null, resistance: null };

    // Ambil 100 data trade terakhir
    const recentTrades = trades.slice(-100).map(t => parseInt(t.price));
    
    // Hitung level support/resistance sederhana
    const support = Math.min(...recentTrades);
    const resistance = Math.max(...recentTrades);
    
    return { support, resistance };
}

function determineStatus(currentPrice, support, resistance) {
    if (!support || !resistance) return 'Neutral (Data kurang)';
    
    const range = resistance - support;
    const position = currentPrice - support;
    
    // Jika harga di 30% bawah range = Support
    if (position < range * 0.3) return 'Support (Area beli)';
    
    // Jika harga di 30% atas range = Resistance
    if (position > range * 0.7) return 'Resistance (Area jual)';
    
    return 'Neutral (Tengah range)';
}

async function displayData() {
    const coins = ['btc', 'doge', 'wbtc'];
    
    for (const coin of coins) {
        const data = await getMarketData(coin);
        if (!data) continue;
        
        const { support, resistance } = calculateSupportResistance(data.trades, data.lastPrice);
        const status = determineStatus(data.lastPrice, support, resistance);
        
        console.log(`
Market: ${data.market}
Harga sekarang: Rp ${data.lastPrice.toLocaleString('id-ID')}
Harga H24: Rp ${data.high24.toLocaleString('id-ID')}
Harga L24: Rp ${data.low24.toLocaleString('id-ID')}
Support: ${support ? 'Rp ' + support.toLocaleString('id-ID') : 'N/A'}
Resistance: ${resistance ? 'Rp ' + resistance.toLocaleString('id-ID') : 'N/A'}
Status: ${status}
=============================`);
    }
    
    setTimeout(displayData, 60000); // Refresh setiap 60 detik
}

console.log('Market Analyzer - Indodax Data');
console.log('=============================');
displayData();

process.on('SIGINT', () => {
    console.log('\nProgram dihentikan');
    process.exit();
});
