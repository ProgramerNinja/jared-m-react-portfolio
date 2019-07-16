import React, { Component } from "react";
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        }

        this.handlFormSubmissionError = this.handlFormSubmissionError.bind(this);
        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        })
    }

    handlFormSubmissionError(error) {
        console.log("handlFormSubmissionError" ,error)
    }

    getPortfolioItems() {
        axios.get(
            "https://avenuej.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc" ,
            { withCredentials: true
            }).then(response => {
                this.setState({
                    portfolioItems: [...response.data.portfolio_items]
                })
                console.log("response from get portfolio items", response);
            }).catch(error => {
                console.log("error in getPortfolioItems", error);
            })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }


  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
            <PortfolioForm 
                handleSuccessfulFormSubmission = {this.handleSuccessfulFormSubmission}
                handlFormSubmissionError = {this.handlFormSubmissionError}
            />
        </div>
        <div className="right-column">
            <PortfolioSidebarList data={this.state.portfolioItems}/>
        </div>
      </div>
    );
  }
}