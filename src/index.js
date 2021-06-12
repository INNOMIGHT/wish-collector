import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css'
import axios from 'axios';



class WishCollector extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
            name: "",
            wish: "",
            wishWall: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fetchWishes = () => {
                let data;

        axios.get('https://morning-escarpment-17933.herokuapp.com/api/v1/wish/')
            .then(res => {
                data = res.data;
                this.setState({wishWall: data
                });
            console.log(data)
            })
    }

    componentWillMount() {
        this.fetchWishes();
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleChange(e){
        this.setState({
            wish: e.target.value
        });

        console.log(this.state.wish, this.state.wishWall)
    }


    handleSubmit(se){
        se.preventDefault();

        axios.post('https://morning-escarpment-17933.herokuapp.com/api/v1/wish/', {
            name: this.state.name,
            detail: this.state.wish
        })
            .then((res) => {
                this.setState({
                    name: "",
                    wish: "",
                })
                this.fetchWishes();
            })

}

  render() {
    return (
      <div className="container">
          <div className="row">
              <nav>
                  <div className="nav-wrapper">
                      <a href="#!" className="brand-logo center">Wish Collector</a>
                      <ul id="nav-mobile" className="left hide-on-med-and-down">
                          <li><a href="sass.html">What to do?</a></li>
                      </ul>
                  </div>
              </nav>
              <div className="col s6 offset-s3" id="take_input">
                  <div className="row">
                      <form className="col s12">
                              <div className="input-field col s12">
                                  <textarea id="textarea1" className="materialize-textarea" placeholder="Your Name. Eg: Vaibhav Shrivastava" value={this.state.name} onChange={this.handleChangeName}></textarea>
                                  <textarea id="textarea2" className="materialize-textarea" placeholder="Eg: Covid Free World!" value={this.state.wish} onChange={this.handleChange}></textarea>
                                  <button className="btn waves-effect waves-light" type="submit" onClick={this.handleSubmit}>Submit
                          </button>
                              </div>

                      </form>
                  </div>
              </div>
          </div>
                <ol>
                  {this.state.wishWall.map((wish) => (
                    <li key={wish.id}><blockquote>
                        {wish.detail}     - {wish.name}
                    </blockquote></li>
                  ))}
                </ol>

        <div className="game-info">

          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <WishCollector />,
  document.getElementById('root')
);

