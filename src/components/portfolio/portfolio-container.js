import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Swiggity swooty i want dat booty",
            isLoading: false,
            data: [
                { title: "Jane", category: "girl", slug: 'jane' },
                { title: "Karter", category: "boy", slug: 'karter' },
                { title: "Ross", category: "boy", slug: 'ross' },
                { title: "Jacob", category: "boy", slug: 'Jacob' },
                { title: "Samantha", category: "girl", slug: 'Samantha' },
                { title: "more...", category: "unknown", slug: 'more' }
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

            return (<PortfolioItem title={item.title} category={item.category} slug={item.slug} />);
        });
    }


    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (

            <div>
                <h1>{this.state.pageTitle}</h1>
                
                <h3>Jay Dawgs Friends!!!</h3>

            <button onClick={() => this.handleFilter('boy')}>boy</button>
            <button onClick={() => this.handleFilter('girl')}>girl</button>
            <button onClick={() => this.handleFilter('unknown')}>unknown</button>

                {this.portfolioItems()}

            </div>
        )
    }
}