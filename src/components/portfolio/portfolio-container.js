import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Swiggity swooty i want dat booty",
            isLoading: false,
            data: [
                { title: "Jane", category: "girl" },
                { title: "karter", category: "boy" },
                { title: "ross", category: "boy" },
                { title: "jacob", category: "boy" },
                { title: "samantha", category: "girl" },
                { title: "more...", category: "unknown" }
            ]
          };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {

            return <PortfolioItem title={item.title} />;
        });
    }


    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (

            <div>
                <h1>{this.state.pageTitle}</h1>

            <button onClick={() => this.handleFilter('boy')}>boy</button>
            <button onClick={() => this.handleFilter('girl')}>girl</button>
            <button onClick={() => this.handleFilter('unknown')}>unknown</button>

                {this.portfolioItems()}

            </div>
        )
    }
}