// Import Libraries for making a component
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CalcBtn } from './component/calcBtn'
// ---------------------------------------

// Make a Component
class Calc extends Component {

    // Set your State here
    state = {
        // albums: []
        tempStat: false,
        lastOpration: null,
        tempScreen: 0,
        tempSave: 0,
    };
    // -------------------

    // below function run before rendere component
    // componentWillMount(){
    //     // add my API array, to stat here
    //     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //         .then(response => this.setState({ albums: response.data }) );
    // }
    // -------------------
    // _setOperation = ( opVal )=> ( opVal !== "e" || opVal !== "c" ) ? this.setState({ lastOpration: opVal }) : this.setState({ lastOpration: null })
    _setOperation = ( opVal )=> {
        if( opVal !== "e" || opVal !== "c" ) {
            this.setState({ lastOpration: opVal });
            alert( this.state.lastOpration );
        }
        else{ this.setState({ lastOpration: null }) }
    }
        
    
    // -------------------


    _validStat = ( operation )=> {
        if( this.state.tempSave !== 0 ) {

            switch ( operation ) {
                case "plus":
                    // _setOperation("plus")
                    this.setState({
                        lastOpration: "plus", 
                        tempSave: parseInt(this.state.tempSave) + parseInt(this.state.tempScreen), 
                        tempScreen: 0, 
                    }) 
                    break;

                case "min":
                    this.setState({
                        lastOpration: "min",
                        tempSave: parseInt(this.state.tempSave) - parseInt(this.state.tempScreen), 
                        tempScreen: 0, 
                    }) 
                    break;

                case "mul":
                    this.setState({
                        lastOpration: "mul",
                        tempSave: parseInt(this.state.tempSave) * parseInt(this.state.tempScreen), 
                        tempScreen: 0, 
                    }) 
                    break;

                case "dev":
                    this.setState({
                        lastOpration: "dev",
                        tempSave: parseInt(this.state.tempSave) / parseInt(this.state.tempScreen), 
                        tempScreen: 0, 
                    }) 
                    break;

                // case "e":
                //     this._validStat( toString(this.state.lastOpration) )
                //         // alert( this.state.lastOpration )
                //         // ( this.state.tempScreen !== 0 && this.state.tempSave !== 0 ) ? 
                //         //     this.setState({ tempScreen: this.state.tempSave,  tempSave: 0, lastOpration: null }) 
                //         //     :
                //         //     alert("add numbers")
                //     break;

                case "c":
                    this.setState({ tempSave: 0, tempScreen: 0, lastOpration: null })
                    break;
            
                default:
                    alert("ddd")
                    break;
            }
            
        }else{
            // this.setState({ tempSave: this.state.tempScreen, tempScreen: 0, })

            switch ( operation ) {

                // case "e":
                //     this._validStat( toString(this.state.lastOpration) )
                //         // alert( this.state.lastOpration )
                //         // ( this.state.tempScreen !== 0 && this.state.tempSave !== 0 ) ? 
                //         //     this.setState({ tempScreen: this.state.tempSave,  tempSave: 0, lastOpration: null }) 
                //         //     :
                //         //     alert("add numbers")
                //     break;

                case "c":
                    this.setState({ tempSave: 0, tempScreen: 0, lastOpration: null })
                    break;
            
                default:
                    this.setState({ 
                        tempSave: this.state.tempScreen, 
                        tempScreen: 0, 
                        lastOpration: operation, 
                    })
                    break;
            }
        }
    }
    
    // -------------------
    _tempAppend = ( tempVal )=> {
        ( this.state.tempScreen !== 0 ) ? 
            this.setState({ tempScreen: this.state.tempScreen + tempVal }) 
            : 
            this.setState({ tempScreen: tempVal })
    }
    
    // -------------------

    



    // RRRRRRRRRRRRRRRRRRR
    render() {
        return (
            <View style={css.container}>

                {/* Temp Val */}
                <Text style={{ fontSize: 20, paddingHorizontal: 5, color: 'gray' }} >{ this.state.tempSave }</Text>
                
                {/* Main Screen */}
                <Text style={{ fontSize: 70, paddingHorizontal: 5, }} >{ this.state.tempScreen }</Text>

                <View style={css.rowTop} >

                    <View style={css.calcBord} >
                        <CalcBtn num="1" onPress={ ()=> this._tempAppend("1")  } />
                        <CalcBtn num="2" onPress={ ()=> this._tempAppend("2")  }  />
                        <CalcBtn num="3" onPress={ ()=> this._tempAppend("3")  }  />
                        <CalcBtn num="4" onPress={ ()=> this._tempAppend("4")  }  />
                        <CalcBtn num="5" onPress={ ()=> this._tempAppend("5")  }  />
                        <CalcBtn num="6" onPress={ ()=> this._tempAppend("6")  }  />
                        <CalcBtn num="7" onPress={ ()=> this._tempAppend("7")  }  />
                        <CalcBtn num="8" onPress={ ()=> this._tempAppend("8")  }  />
                        <CalcBtn num="9" onPress={ ()=> this._tempAppend("9")  }  />
                        <CalcBtn num="0" style={{ width: 60+120+20 }} onPress={ ()=> this._tempAppend("0")  }  />
                    </View>
                    <View style={css.calcFun} >
                        {/* <CalcBtn num="+" style={{ height: 130, }} onPress={ ()=> this._validStat('plus')  }  /> */}
                        <CalcBtn num="+" style={{ height: 130, }} onPress={ ()=> this._setOperation('plus')  }  />
                        <CalcBtn num="=" style={{ height: 130, backgroundColor: 'orange',  }} textStyly={{ color: '#fff', }} onPress={ ()=> this._validStat('e')  }  />
                        
                        <CalcBtn num="-" onPress={ ()=> this._validStat('min')  }  />
                        <CalcBtn num="*" onPress={ ()=> this._validStat('mul')  }  />
                        <CalcBtn num="/" onPress={ ()=> this._validStat('dev')  }  />
                        <CalcBtn num="C" style={{ backgroundColor: 'red' }}  textStyly={{ color: '#fff', }} onPress={ ()=> this._validStat('c')  }  />
                    </View>


                </View>

            </View>
        );
    }



};


// Style here
const css = {
    container: {
        // display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'column',

        // backgroundColor: 'gray',
        // justifyContent: 'center',
        // alignItems: 'flex-end',
        // alignContent: 'flex-start',
    },
        rowTop: {
            // flex: 1,
            width: '100%',
            height: 300,
            justifyContent: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'nowrap'  ,
            // flexFlow: 'row nowrap',
        },
            calcBord: {
                flex: 3,
                flexDirection: 'row',
                flexWrap: 'wrap',

                backgroundColor: 'lightgray',
                
                // justifyContent: 'space-around',
                // alignContent: 'space-around',
                
                // flexDirection: 'column',
                // height: 300,
                // width: 250
                
                // justifyContent: 'center',
                // alignItems: 'center',
            },
            calcFun: {
                flex: 2,
                backgroundColor: 'lightgray',
                // backgroundColor: 'red',
                // backgroundColor: '#fff',
                flexDirection: 'column',
                // flexWrap: 'nowrap',
                flexWrap: 'wrap',
                // height: 300,
                // width: 150,

                // justifyContent: 'center',
                // alignItems: 'center',
            },
    }

// Make a Component available to other parts of the app
export default Calc;