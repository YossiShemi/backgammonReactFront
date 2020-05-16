import React, { Component } from 'react'
import './Board.css';
import './panel/Panel';
import Panel from './panel/Panel';
import DisplayCheckers from '../displayCheckers/DisplayCheckers';
import RollArea from '../rollarea/RollArea';
 


export class Board extends Component {
    render() {
        return (
     
            <div className="board">

                <div className="boardUp">
                    <Panel color="black" dir="up" className="panel"
                    canMove={this.props.points[12].canMove}
                    canReceive={this.props.points[12].canReceive}
                    > {DisplayCheckers("player"+this.props.points[12].player,this.props.points[12].checkers)}</Panel>
                    <Panel color="white" dir="up" className="panel"
                    canMove={this.props.points[13].canMove}
                    canReceive={this.props.points[13].canReceive}
                    > {DisplayCheckers("player"+this.props.points[13].player,this.props.points[13].checkers)}</Panel>
                    <Panel color="black" dir="up" className="panel"
                    canMove={this.props.points[14].canMove}
                    canReceive={this.props.points[14].canReceive}
                    > {DisplayCheckers("player"+this.props.points[14].player,this.props.points[14].checkers)}</Panel>
                    <Panel color="white" dir="up" className="panel"
                    canMove={this.props.points[15].canMove}
                    canReceive={this.props.points[15].canReceive}
                    > {DisplayCheckers("player"+this.props.points[15].player,this.props.points[15].checkers)}</Panel>
                    <Panel color="black" dir="up" className="panel"
                    canMove={this.props.points[16].canMove}
                    canReceive={this.props.points[16].canReceive}
                    > {DisplayCheckers("player"+this.props.points[16].player,this.props.points[16].checkers)}</Panel>
                    <Panel color="white" dir="up" className="panel"
                    canMove={this.props.points[17].canMove}
                    canReceive={this.props.points[17].canReceive}
                    > {DisplayCheckers("player"+this.props.points[17].player,this.props.points[17].checkers)}</Panel>

                                                  <div className="jailUp"> {DisplayCheckers("player1", this.props.jail.player1)}</div>

                    <Panel color="black" dir="up" className="panel"
                    canMove={this.props.points[18].canMove}
                    canReceive={this.props.points[18].canReceive}
                    > {DisplayCheckers("player"+this.props.points[18].player,this.props.points[18].checkers)}</Panel>
                    <Panel color="white" dir="up" className="panel"
                    canMove={this.props.points[19].canMove}
                    canReceive={this.props.points[19].canReceive}
                    > {DisplayCheckers("player"+this.props.points[19].player,this.props.points[19].checkers)}</Panel>
                    <Panel color="black" dir="up" className="panel"
                    canMove={this.props.points[20].canMove}
                    canReceive={this.props.points[20].canReceive}
                    > {DisplayCheckers("player"+this.props.points[20].player,this.props.points[20].checkers)}</Panel>
                    <Panel color="white" dir="up" className="panel"
                    canMove={this.props.points[21].canMove}
                    canReceive={this.props.points[21].canReceive}
                    > {DisplayCheckers("player"+this.props.points[21].player,this.props.points[21].checkers)}</Panel>
                    <Panel color="black" dir="up" className="panel"
                    canMove={this.props.points[22].canMove}
                    canReceive={this.props.points[22].canReceive}
                    > {DisplayCheckers("player"+this.props.points[22].player,this.props.points[22].checkers)}</Panel>
                    <Panel color="white" dir="up" className="panel"
                    canMove={this.props.points[23].canMove}
                    canReceive={this.props.points[23].canReceive}
                    > {DisplayCheckers("player"+this.props.points[23].player,this.props.points[23].checkers)}</Panel>
                </div>


                        <span className="rollingInTheDeep">
                        <RollArea
                                        gameStatus={this.props.gameStatus}
                                        dices={this.props.dices}
                                        rolldices={this.props.rolldices}
                                        p1IsNext={this.props.p1IsNext}
                                        />
                        </span>
            


                <div className="boardbottom">
                    <Panel color="black" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[11].canMove}
                    canReceive={this.props.points[11].canReceive}
                    > {DisplayCheckers("player"+this.props.points[11].player,this.props.points[11].checkers)}</Panel>
                    <Panel color="white" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[10].canMove}
                    canReceive={this.props.points[10].canReceive}
                    > {DisplayCheckers("player"+this.props.points[10].player,this.props.points[10].checkers)}</Panel>
                    <Panel color="black" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[9].canMove}
                    canReceive={this.props.points[9].canReceive}
                    > {DisplayCheckers("player"+this.props.points[9].player,this.props.points[9].checkers)}</Panel>
                    <Panel color="white" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[8].canMove}
                    canReceive={this.props.points[8].canReceive}
                    > {DisplayCheckers("player"+this.props.points[8].player,this.props.points[8].checkers)}</Panel>
                    <Panel color="black" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[7].canMove}
                    canReceive={this.props.points[7].canReceive}
                    > {DisplayCheckers("player"+this.props.points[7].player,this.props.points[7].checkers)}</Panel>
                    <Panel color="white" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[6].canMove}
                    canReceive={this.props.points[6].canReceive}
                    > {DisplayCheckers("player"+this.props.points[6].player,this.props.points[6].checkers)}</Panel>

                                     <div className="jailDown"> {DisplayCheckers("player2", this.props.jail.player2)}</div>

                    <Panel color="black" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[5].canMove}
                    canReceive={this.props.points[5].canReceive}
                    > {DisplayCheckers("player"+this.props.points[5].player,this.props.points[5].checkers)}</Panel>
                    <Panel color="white" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[4].canMove}
                    canReceive={this.props.points[4].canReceive}
                    > {DisplayCheckers("player"+this.props.points[4].player,this.props.points[4].checkers)}</Panel>
                    <Panel color="black" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[3].canMove}
                    canReceive={this.props.points[3].canReceive}
                    > {DisplayCheckers("player"+this.props.points[3].player,this.props.points[3].checkers)}</Panel>
                    <Panel color="white" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[2].canMove}
                    canReceive={this.props.points[2].canReceive}
                    > {DisplayCheckers("player"+this.props.points[2].player,this.props.points[2].checkers)}</Panel>
                    <Panel color="black" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[1].canMove}
                    canReceive={this.props.points[1].canReceive}
                    > {DisplayCheckers("player"+this.props.points[1].player,this.props.points[1].checkers)}</Panel>
                    <Panel color="white" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[0].canMove}
                    canReceive={this.props.points[0].canReceive}
                    > {DisplayCheckers("player"+this.props.points[0].player,this.props.points[0].checkers)}</Panel>
                </div>

             </div>
       
        )
    }
}


export default Board
