import { Component } from 'react'
import ReactMapGL from 'react-map-gl'

class Map extends Component {
  state = {
    viewport: {
      width: '95vw',
      height: '70vh',
      latitude: 0,
      longitude: 0,
      zoom: 1
    }
  }

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/maiconburn/ckjqxsp6k5qsq19t4ls338iqf"
        mapboxApiAccessToken="pk.eyJ1IjoibWFpY29uYnVybiIsImEiOiJja2pxeHA4c20zbDFzMnFvN3Zka2owdWM5In0.kYfoZcVY8hnP_Pd115z_tA"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    )
  }
}

export default Map