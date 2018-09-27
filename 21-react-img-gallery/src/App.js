import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faHeart, faLink, faDownload, faCode, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
library.add(faStroopwafel, faHeart, faLink, faDownload, faCode, faChevronLeft, faChevronRight, faFacebookF, faTwitter, faInstagram)


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Layout />
      </BrowserRouter>
    );
  }
}

export default App;
