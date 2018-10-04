import React, { Component, Fragment } from 'react';
import MovieCard from '../../Components/MovieCard/MovieCard';

class Home extends Component {
	state = {
		movieData: null,
		movieDataError: false;
	}

	componentDidMount() {
		fetch('https://my-json-server.typicode.com/sky-uk/monitoring-tech-test/data')
			.then(res => res.json())
			.then(data => console.log('timeseries data', data))
			.catch(err => console.log(err))

		fetch('https://my-json-server.typicode.com/sky-uk/monitoring-tech-test/asses')
			.then(res => res.json())
			.then(movieData => {
				console.log('movie data', movieData);
				this.setState({movieData})
			})
			.catch(err => {
				console.log(err);
				this.setState({movieDataError: true})
			})

	}

	render() {
		if (!this.state.movieData) return <h1>...Loading</h1>
		if (this.state.movieDataError) return <h1>Error, could not load movie data</h1>

		let movieCards = this.state.movieData.map(movie => (
			<MovieCard 
				key={movie.name}
				name={movie.name}
				description={movie.description}
				img={movie.assetImage}
				duration={movie.duration}
				skyGoViews={movie.skygoTotalViews} />
		));

		return (
			<Fragment>
				<h1>Top 10 Sky Movies</h1>
				<div className="movieCardsWrap">
					{movieCards}
				</div>
			</Fragment>
		) 
	}
}

export default Home