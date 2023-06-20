import {Component} from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import chartCosmetics from './chartCosmetics';

const products = [{
    Title: "USB Drive",
    Price: 20,
    Stored: 20,
    Sold: undefined,
    Revenue: undefined
},
    {
        Title: "Cap",
        Price: 13,
        Stored: 15,
        Sold: undefined,
        Revenue: undefined
    },
    {
        Title: "Wristband",
        Price: 18,
        Stored: 50,
        Sold: undefined,
        Revenue: undefined
    },
    {
        Title: "Glasses",
        Price: 95,
        Stored: 100,
        Sold: undefined,
        Revenue: undefined
    },
    {
        Title: "Card",
        Price: 10,
        Stored: 35,
        Sold: undefined,
        Revenue: undefined
    }
]

const sales = [
    {
        CustomerID: 2262,
        Quantity: 5,
        TotalPrice: 100,
        OrderDate: "1/4/2023",
        Status: undefined,
        start_date: undefined,
        end_date: undefined
    },
    {
        CustomerID: 2200,
        Quantity: 5,
        TotalPrice: 65,
        OrderDate: "6/16/2023",
        Status: undefined,
        start_date: undefined,
        end_date: undefined
    },
    {
        CustomerID: 3777,
        Quantity: 5,
        TotalPrice: 90,
        OrderDate: "3/3/2023",
        Status: undefined,
        start_date: undefined,
        end_date: undefined
    },
    {
        CustomerID: 2839,
        Quantity: 5,
        TotalPrice: 475,
        OrderDate: "4/4/2023",
        Status: undefined,
        start_date: undefined,
        end_date: undefined
    },
    {
        CustomerID: 2736,
        Quantity: 4,
        TotalPrice: 40,
        OrderDate: "1/4/2023",
        Status: undefined,
        start_date: undefined,
        end_date: undefined
    }
]


ReactFC.fcRoot(FusionCharts, Charts);
function formatNum(num) {
    let si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "K" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ];
    let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(2).replace(rx, "$1") + si[i].symbol;
}
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            mrrChartData: null,
            nrChartData: null,
            mrrGrowthChartData: null,
            arpuChartData: null,
            cacChartData: null,
            ltvChartData: null
        };
    }

    getData = arg => {
        // renewed users
        let itemsSold = 0;
        let totalRevenue = 0;
        let renewedUsersChangeper = 0;
        const renewedUsersChangeperElem = document.getElementById("renewed-users-changeper");
        for (let i = 0; i < sales.length; i++) {
            itemsSold += sales[i]["month"];

        }
        // feeding kpi card values and chart kpi tickers
        document.getElementById("renewed-users-val").innerHTML = renewedUsersVal;
    };
    render() {
        return (
            <div>
                <nav className="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <div className="navbar-item is-size-4 has-text-weight-semibold has-text-grey-darker">BAIS <span className="is-size-6 has-text-grey has-text-weight-normal">
                                Business AI Software</span></div>
                    </div>
                    <div className="navbar-end" aria-label="menu" aria-expanded="false">
                        {/* eslint-disable */}
                        <a id="btn-2018" className="navbar-item is-active has-text-link" href="#" >რეპორტის გადმოწერა</a>
                        {/* eslint-enable */}
                    </div>
                </nav>

                <div className="container is-fullhd">
                    <section className="section is-bottom-paddingless has-paddingtop-size-1">
                        <div className="columns">
                            <div className="column">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="columns columns-kpi is-mobile is-desktop has-block-display">
                                            <div className="column header is-two-thirds-desktop is-full-tablet is-two-thirds-mobile has-text-left is-bottom-paddingless">Renewed Users
                                            </div>
                                            <div id="renewed-users-changeper" className="column has-text-right has-text-left-tablet-only has-text-left-desktop-only is-bottom-paddingless" data-up="" data-down="">...</div>
                                        </div>
                                        <div id="renewed-users-val">...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section is-bottom-paddingless has-paddingtop-size-1">
                        <div className="columns is-multiline">
                            <div className="column is-half-tablet is-one-third-desktop is-half-fullhd">
                                <div className="card">
                                    <div className="card-content has-chart">
                                        <div className="columns is-marginless is-mobile is-desktop has-block-display">
                                            <div className="column header is-two-thirds-desktop is-full-tablet is-two-thirds-mobile has-text-left is-bottom-paddingless">Monthly Reccuring Revenue</div>
                                            <div id="mrr-changeper" className="column has-text-right has-text-left-tablet-only has-text-left-desktop-only is-bottom-paddingless" data-up="" data-down="">...</div>
                                        </div>
                                        <div id="mrr-val">...</div>
                                    </div>
                                    <div id="mrr-chart">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Dashboard;
