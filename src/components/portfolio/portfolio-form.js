import React, {Component} from 'react';
import axios from 'axios';

export default class PortfolioForm extends Component {
    constructor(props) {
        super();

        this.state = {
            name: "",
            description: "",
            category: "Male",
            position: "",
            url: "",
            thumb_image: "",
            banner_image: "",
            logo: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    buildForm() {
        let formData = new FormData();
    
        formData.append("portfolio_item[name]", this.state.name);
        formData.append("portfolio_item[description]", this.state.description);
        formData.append("portfolio_item[url]", this.state.url);
        formData.append("portfolio_item[category]", this.state.category);
        formData.append("portfolio_item[position]", this.state.position);
    
        return formData;
      }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        axios.post("https://avenuej.devcamp.space/portfolio/portfolio_items",
        this.buildForm(),
        {withCredentials: true}
        ).then(response => {
            this.props.handleSuccessfulFormSubmission(response.data.portfolio_item);
        }).catch(error => {
            console.log("portfolio form handleSubmit error", error);
        })

        event.preventDefault();
    }

    render() {
        return(
            <div>
                <h1>Portfolio Form</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="">
                        <input
                        type="text"
                        name="name"
                        placeholder="Portfolio Item Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        />

                        <input
                            type="text"
                            name="url"
                            placeholder="Portfolio Item URL"
                            value={this.state.url}
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="">
                        <input
                            type="text"
                            name="position"
                            placeholder="Portfolio Item Position"
                            value={this.state.position}
                            onChange={this.handleChange}
                            />

                        <select
                            name="category"
                            value={this.state.category}
                            onChange={this.handleChange}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Non-Friend">Non-Friend</option>
                        </select>
                    </div>
                    <div className="">
                        <textarea
                            type="text"
                            name="description"
                            placeholder="Portfolio Item Description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <button type="submit">Save</button>
                    </div>

                </form>



            </div>
        );
    }
}