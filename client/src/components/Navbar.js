import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {Link} from 'react-router-dom';
import {changeTheme} from '../actions';
import {connect} from 'react-redux';


import '../styles/Navbar.css';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className='root'>
                <AppBar position="static" className='appBar'>
                    <Toolbar className='nav'>
                    <FormControlLabel
                        control={
                            <Switch
                            className='switch'
                            onChange={() => this.props.onThemeChange()}
                            color="primary"
                            value="dynamic-class-name"
                            />
                        }
                        />
            
                    <Link className='noUnderline' to="/AddVideo"><Button className='rudButton'>Rudiments</Button></Link>
                    
                    <Typography variant="title" color="inherit"><Link className='shred' to="/">Chop Builder</Link></Typography>
                    <Button className='exButton'>Exercises</Button>
                    
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        theme: state.theme
    }
}

function mapDispatchToProps(dispatch){

    return{
        onThemeChange: (theme) => dispatch(changeTheme(theme))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

