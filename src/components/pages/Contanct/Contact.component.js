import React from 'react'
import axios from 'axios'

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      submitted: null,
      formRequest: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const { value, name } = target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      submitted: true
    });

    axios.post('https://formula-test-api.herokuapp.com/contact', this.state)
    .then(data => {
      this.setState({
        formRequest: data
      });
    })
    .catch(error => {
      this.setState({
        formRequest: false
      });
    });
  }

  render() {
    let { submitted, formRequest } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {!submitted ? null : (formRequest ? (
          <div>Форма была успешно отправлена!</div>
        ) : (
          <div>Форма не была успешно отплавлена!</div>
        ))}
        <div>
          <label htmlFor="name">Name</label>
          <input type="name" name="name" id="name" onChange={this.handleInputChange}/>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={this.handleInputChange}/>
        </div>

        <div>
          <label htmlFor="comment">Comment</label>
          <textarea name="comment" id="comment" cols="30" rows="10" onChange={this.handleInputChange}></textarea>
        </div>

        <div className="buttons">
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default Contact