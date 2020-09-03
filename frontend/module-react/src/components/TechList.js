import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {

    // staticDefaultProps = {
    //     tech: 'Default'
    // }

    
    // static propTypes = {
    //     tech: 'Default'
    // }
    
    state = {
        newTech: '',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
        ]
    };

    handleInputChange = e => {
        this.setState({ newTech: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ 
            techs: [...this.state.techs, this.state.newTech],  
            newTech: ''
        });
    }

    handleDelete = (tech) => {
        this.setState({
            techs: this.state.techs.filter(t => t !== tech)
        })
    } 

    render() { 
        return (   
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech => (
                        <TechItem
                            tech={tech}
                            key={tech}
                            onDelete={() => this.handleDelete(tech)}
                        />
                     
                    ))}
                    <TechItem />
                </ul>
                <input
                    type="text"
                    onChange={this.handleInputChange} 
                    value={this.state.newTech} 
                />
                <button type="submit">Send</button>
            </form>
        );  
    }
}

export default TechList;
