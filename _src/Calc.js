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
        calcDone: true,
        tempResult: 0,

        lastOpration: null,
        tempScreen: 0,
        tempSave: 0,
    };
    // -------------------
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

        // handel C button.
        if ( opVal !== "c") {

            // working on new operation
            this.setState({ calcDone: false, })
            
            // if( this.state.tempScreen !==0 && this.state.tempSave !==0 ){
            if( this.state.tempScreen !==0 && this.state.tempSave ==0 ){
                
                this.setState({ 
                    lastOpration: opVal,
                    tempSave: this.state.tempScreen, 
                    tempScreen: 0, 
                });
            }
            else if ( this.state.tempScreen !==0 && this.state.tempSave !==0 ) {
                this.setState({ 
                    lastOpration: opVal,
                    tempSave: this.state.tempScreen, 
                });

                this._subResult();
                
            }


        }
        else{  //  Clear All data here
            this.setState({
                tempScreen: 0, 
                tempSave: 0, 
                lastOpration: null, 
                calcDone: true, 
            });
        }





    }
    // -------------------
    // +
    _getPlus = ( $saved, $screen )=> { this.setState({ tempScreen: parseFloat( $saved ) + parseFloat( $screen ), tempSave: 0, })  }
    // -------------------
    // -
    _getMin = ( $saved, $screen )=> { this.setState({ tempScreen: parseFloat( $saved ) - parseFloat( $screen ), tempSave: 0, })  }
    // -------------------
    // x
    _getMul = ( $saved, $screen )=> { this.setState({ tempScreen: parseFloat( $saved ) * parseFloat( $screen ), tempSave: 0, })  }
    // -------------------
    // /
    _getDev = ( $saved, $screen )=> { this.setState({ tempScreen: parseFloat( $saved ) / parseFloat( $screen ), tempSave: 0, })  }
    // -------------------
    
    // Fire Operation on click "=" btn.
    _result = ()=> {

        switch ( this.state.lastOpration ) {
            case "plus":
                this._getPlus( this.state.tempSave, this.state.tempScreen )
                break;

            case "min":
                this._getMin( this.state.tempSave, this.state.tempScreen )               
                break;

            case "mul":
                this._getMul( this.state.tempSave, this.state.tempScreen )                
                break;

            case "dev":
                this._getDev( this.state.tempSave, this.state.tempScreen )                
                break;
                
            default:
                alert("Please chose one Operation")
                break;
        }

        this.setState({ lastOpration: null, calcDone: true, }) 
        

    }
        
    // -------------------
    _subResult = ()=> {

        let  $saved = this.state.tempSave;
        let  $screen = this.state.tempScreen;
        let  $lastOpration = this.state.lastOpration;

        switch ( $lastOpration ) {
            case "plus":
                this.setState({ tempSave: parseFloat( $saved ) + parseFloat( $screen ), tempScreen: 0, })
                break;

            case "min":
                this.setState({ tempSave: parseFloat( $saved ) - parseFloat( $screen ), tempScreen: 0, })
                break;

            case "mul":
                this.setState({ tempSave: parseFloat( $saved ) * parseFloat( $screen ), tempScreen: 0, })
                break;

            case "dev":
                this.setState({ tempSave: parseFloat( $saved ) / parseFloat( $screen ), tempScreen: 0, })
                break;
                
            default:
                alert("Please chose one Operation")
                break;
        }

    }
        
    // -------------------
    _tempAppend = ( tempVal )=> {
        // ( this.state.tempScreen !== 0 ) ? 
        //     this.setState({ tempScreen: this.state.tempScreen + tempVal }) 
        //     : 
        //     this.setState({ tempScreen: tempVal })

        if( this.state.tempScreen !== 0 && this.state.calcDone !== true ) {

            this.setState({ tempScreen: this.state.tempScreen + tempVal }) 
        } 
        else{
            this.setState({ tempScreen: tempVal })
        }
    }
    
    // -------------------

    



    // RRRRRRRRRRRRRRRRRRR
    render() {
        return (
            <View style={css.container}>

                {/* Temp Val */}
                <Text style={{ fontSize: 20, paddingHorizontal: 5, color: 'gray' }} >{ this.state.tempSave }</Text>

                {/* Temp Operation */}
                <Text style={{ fontSize: 20, paddingHorizontal: 5, color: 'gray' }} >{ this.state.lastOpration }</Text>
                
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
                        {/* <CalcBtn num="=" style={{ height: 130, backgroundColor: 'orange',  }} textStyly={{ color: '#fff', }} onPress={ ()=> this._validStat('e')  }  /> */}
                        <CalcBtn num="=" style={{ height: 130, backgroundColor: 'orange',  }} textStyly={{ color: '#fff', }} onPress={ ()=> this._result()  }  />
                        
                        <CalcBtn num="-" onPress={ ()=> this._setOperation('min')  }  />
                        <CalcBtn num="x" onPress={ ()=> this._setOperation('mul')  }  />
                        <CalcBtn num="/" onPress={ ()=> this._setOperation('dev')  }  />
                        <CalcBtn num="C" style={{ backgroundColor: 'red' }}  textStyly={{ color: '#fff', }} onPress={ ()=> this._setOperation('c')  }  />
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