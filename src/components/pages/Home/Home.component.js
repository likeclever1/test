import React from 'react'
import axios from 'axios'
import Dish from '../../common/Dish/Dish.component'

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: [],
      error: null
    };

    this.fetchMenu = this.fetchMenu.bind(this);
  }

  componentDidMount() {
    this.fetchMenu();
  }

  fetchMenu() {
    axios.get('https://formula-test-api.herokuapp.com/menu')
    .then(({data}) => {
      this.setState({
        menu: this.filterByExpiration(data),
        error: false
      });
    })
    .catch(error => {
      this.setState({
        error: true
      });
    });
  }

  filterByExpiration(items) {
    return items.filter(i => +new Date(i.expirationDate) > Date.now())
  };

  render() {
    let { menu, error } = this.state;
    console.log(menu);

    return (
      <div>
        <div className="dishes">
          {menu && (
            menu.map((item, index) => (
              <Dish key={index} data={item} />
            ))
          )}
        </div>
        
        {!error ? null : (
          <div>Ошибка загрузки данных</div>
        )}
      </div>
    )
  }
}

export default Home