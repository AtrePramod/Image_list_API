import React from 'react'
import SearchInput from './searchInput';
import axios from 'axios';

class App extends React.Component {
    async onSearchSubmit(entry) {

        const response = await axios.post(`https://pixabay.com/api/?key=35878181-1910cdbd5f8fdb050ca1027f1&q=${entry}&image_type=photo`)
        console.log(response.data.hits)
    }
    render() {

        return (
            <div className='ui container' style={{ marginTop: '30px' }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
            </div >
        )
    }
}

export default App;

