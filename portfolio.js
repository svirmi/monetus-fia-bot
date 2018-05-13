const YahooFinanceAPI = require('yahoo-finance-data')

const yahoo = new YahooFinanceAPI({
  key: process.env.YAHOO_KEY,
  secret: process.env.YAHOO_SECRET
})

const composition = [
  {
    ticker: 'IVVB11',
    name: 'iShares S&P 500',
    description: 'ETF das 500 maiores empresas dos EUA. Esse investimento traz uma diversificação global ao seu portfólio. Através dele, você está investindo em empresas como Apple, Google, Facebook, Amazon, Netflix, Coca-Cola, Starbucks, Nike e Walt Disney.',
    url: '',
    allocation: 1647
  },
  {
    ticker: 'NATU3',
    name: 'Natura',
    description: 'Multinacional brasileira do setor de cosméticos, higiene e beleza, fundada em 1969. Além do Brasil, está presente na Argentina, Chile, Colômbia, Estados Unidos, França, México e Peru. No mercado brasileiro, é líder em vendas diretas e é considerada uma das empresas mais sustentáveis do país.',
    url: '',
    allocation: 1420
  },
  {
    ticker: 'PIBB11',
    name: 'It Now IBrX-50',
    description: 'ETF das 50 maiores empresas do Brasil. Esse investimento captura o crescimento das principais empresas brasileiras. Através dele, você está investindo em empresas como Ambev, Lojas Americanas, Multiplan, MRV, Cemig, Embraer e Localiza.',
    url: '',
    allocation: 873
  },
  {
    ticker: 'MDIA3',
    name: 'M. Dias Branco',
    description: 'Com mais de 60 anos de história e presença em todo o país, é uma das maiores empresas brasileiras do setor alimentício, sendo líder no mercado de massas e biscoitos do Brasil. Em relação ao mercado mundial, a empresa é a sexta maior na categoria de massas e a sétima maior na categoria de biscoitos.',
    url: '',
    allocation: 720
  },
  {
    ticker: 'POMO4',
    name: 'Marcopolo',
    description: 'Empresa líder do mercado brasileiro no segmento ônibus, ela posiciona-se entre as maiores fabricantes do mundo. Com fábricas nos cinco continentes, os veículos produzidos pela empresa rodam nas estradas de mais de cem países. (Ações preferenciais)',
    url: '',
    allocation: 719
  },
  {
    ticker: 'ABCB4',
    name: 'ABC Brasil',
    description: 'Controlado pelo Arab Banking Corporation (ABC), é um banco múltiplo especializado na concessão de crédito e serviços para empresas de médio e grande porte. O Banco ABC conta com um amplo portfolio de produtos e profunda expertise na análise de crédito, o que lhe tem possibilitado auferir resultados consistentes ao longo dos últimos 25 anos.',
    url: '',
    allocation: 697
  },
  {
    ticker: 'RAPT4',
    name: 'Randon',
    description: 'Maior fabricante de reboques e semirreboques da América Latina e entre os maiores do mundo, a Randon, desde 1949, fabrica diferentes tipos de equipamentos entre semirreboques, reboques e carrocerias.',
    url: '',
    allocation: 578
  },
  {
    ticker: 'VVAR11',
    name: 'Via Varejo',
    description: 'A Via Varejo é a empresa responsável pela administração de duas importantes varejistas brasileiras: Casas Bahia e Pontofrio. A companhia está presente em mais de 400 municípios brasileiros, 20 estados e no Distrito Federal, com quase mil lojas e cerca de 50 mil colaboradores.',
    url: '',
    allocation: 571
  },
  {
    ticker: 'GRND3',
    name: 'Grendene',
    description: 'A Grendene foi fundada em 1971 e é uma das maiores produtoras mundiais de calçados. Possui tecnologia proprietária e exclusiva na produção de calçados para os públicos feminino, masculino e infantil. A empresa comercializa seus produtos em mais de 90 países, nos cinco continentes.',
    url: '',
    allocation: 532
  },
  {
    ticker: 'CVCB3',
    name: 'CVC Brasil',
    description: 'É a maior operadora de turismo da América Latina. A empresa oferece uma gama diversificada de produtos e serviços turísticos para as famílias brasileiras possuindo um amplo portfólio de pacotes para mais de 1.000 destinos domésticos e internacionais.',
    url: '',
    allocation: 459
  },
  {
    ticker: 'CIEL3',
    name: 'Cielo',
    description: 'Líder do segmento de pagamentos eletrônicos na América Latina. A empresa conta com aproximadamente 1,7 milhão de clientes ativos, desde empreendedores até os maiores varejistas do país, estando presente em quase todos os municípios brasileiros.',
    url: '',
    allocation: 357
  },
  {
    ticker: 'PTBL3',
    name: 'Portobello',
    description: 'É hoje a maior empresa de cerâmicas do Brasil. Sua produção, próxima de 30 milhões de metros quadrados, atende países dos cinco continentes e também o mercado interno. A companhia possui mais de 2.600 colaboradores, responsáveis pelo design e inovação de itens que lançam tendências na arquitetura e decoração no Brasil.',
    url: '',
    allocation: 350
  },
  {
    ticker: 'CGRA4',
    name: 'Grazziotin',
    description: 'A rede é uma das mais tradicionais varejistas do Sul do país. Atua principalmente no setor de vestuário e decoração para casa voltada à família. Com um amplo leque de produtos e preços acessíveis, a empresa tem apresentado sólidos resultados ao longo de seus mais de 50 anos de história. (Ações preferenciais)',
    url: '',
    allocation: 326
  },
  {
    ticker: 'POMO3',
    name: 'Marcopolo',
    description: 'Empresa líder do mercado brasileiro no segmento ônibus, ela posiciona-se entre as maiores fabricantes do mundo. Com fábricas nos cinco continentes, os veículos produzidos pela empresa rodam nas estradas de mais de cem países. (Ações ordinárias)',
    url: '',
    allocation: 303
  },
  {
    ticker: 'EZTC3',
    name: 'Eztec',
    description: 'Com mais de 40 anos de experiência nos setores imobiliário, hoteleiro e agropecuário, a empresa é uma das maiores e mais tradicionais incorporadoras de imóveis de alto padrão do país.',
    url: '',
    allocation: 272
  },
  {
    ticker: 'CGRA3',
    name: 'Grazziotin',
    description: 'A rede é uma das mais tradicionais varejistas do Sul do país. Atua principalmente no setor de vestuário e decoração para casa voltada à família. Com um amplo leque de produtos e preços acessíveis, a empresa tem apresentado sólidos resultados ao longo de seus mais de 50 anos de história. (Ações ordinárias)',
    url: '',
    allocation: 176
  }
]

function round (num) {
  return Math.round(parseFloat(num) * 100) / 100
}

function yahooQuote (ticker) {
  return new Promise((resolve, reject) => {
    yahoo
      .getHistoricalData(`${ticker}.SA`, '1d', '1d')
      .then((data) => {
        const quote = data.chart.result[0].indicators.quote[0]
        const previousClose = data.chart.result[0].meta.chartPreviousClose

        let q = {
          ticker: ticker,
          previousClose: round(previousClose),
          open: round(quote.open),
          high: round(quote.high),
          close: round(quote.close),
          low: round(quote.low),
          volume: round(quote.volume[0])
        }

        q.delta = round((q.close - q.previousClose) / q.previousClose * 100)

        resolve(q)
      }).catch((err) => {
        console.log(err)
        reject(new Error('Serviço temporariamente fora do ar, por favor, tente mais tarde.'))
      })
  })
}

function yahooQuotes (tickers) {
  let quotes = []

  tickers.forEach((ticker) => {
    quotes.push(yahooQuote(ticker))
  })

  return Promise.all(quotes)
}

const portfolio = {
  composition,
  getAsset: function (ticker) {
    return composition.find((asset) => asset.ticker === ticker.toUpperCase())
  },
  fetchQuote: yahooQuote,
  fetchPerformance: function () {
    let performance = {
      assets: []
    }

    return new Promise((resolve, reject) => {
      const tickers = composition.map((asset) => asset.ticker)

      yahooQuotes(tickers).then((quotes) => {
        let weightedSum = 0

        composition.forEach((a) => {
          const quote = quotes.find((q) => q.ticker === a.ticker)

          const asset = {
            ticker: a.ticker,
            name: a.name,
            allocation: a.allocation,
            quote: quote
          }

          weightedSum += quote.delta * asset.allocation

          performance.assets.push(asset)
        })

        performance.delta = round(weightedSum / 10000)

        resolve(performance)
      }).catch((err) => reject(err))
    })
  }
}

module.exports = portfolio
