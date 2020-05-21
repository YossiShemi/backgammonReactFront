
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import './SoundController.css';




export class SoundController extends Component {
  state={
    value:100
  }
  handleChange = (event, newValue) => {
    this.setState({value:newValue})
    this.props.changeVolume(parseInt(this.state.value/10)/10)
    console.log("volume: "+  parseInt(this.state.value/10)/10 );
    
  };

    render() {
        return (
            <div className="SoundController">

            <div className="effectsTitle">  Effects</div>
     
           <Grid container spacing={2}  style={{marginLeft:'10px'}}>
     
             <Grid item>
               <VolumeUp />
             </Grid>
     
             <Grid item xs>
               <Slider value={this.state.value} onChange={this.handleChange} aria-labelledby="continuous-slider" orientation="vertical" style={{height:'150px'}} />
             </Grid>
     
             <Grid item>
               <VolumeDown />
             </Grid>
     
           </Grid>
     
         </div>
        )
    }
}

export default SoundController




