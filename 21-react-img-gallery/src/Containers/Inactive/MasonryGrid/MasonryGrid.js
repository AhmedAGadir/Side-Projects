import React, { Component } from 'react';
import Thumb from '../../../Components/Thumb/Thumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MasonryGrid.css';

class MasonryGrid extends Component {

	truncate(str) {
		return str
	}

	render() {

		return (
			<div className="masonryGrid">
				{this.props.thumbData.map((thumb, ind) => (
					<div className="gridThumb">
				  		<Thumb 
				  			id={thumb.id}
				  			key={thumb.id}
				        	title={thumb.title}
				  			url={thumb.preview_url}
				  			clicked={() => this.props.selectThumb(ind)}
				  			delete={() => this.props.deleteThumb(ind)} />
				  		<span className="delete" onClick={() => this.props.deleteThumb(ind)}>
							<FontAwesomeIcon icon="trash-alt" />
						</span>
				  		<div className="title">
				  			<p>{this.truncate(thumb.title)}</p>
				  		</div>
			  		</div>
			  	))}
			</div>
		)
	}
}

export default MasonryGrid;