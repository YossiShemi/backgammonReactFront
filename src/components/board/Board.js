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
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[12].player,this.props.points[12].checkers,1,this.props.points[12].canMove)}</Panel>
                    <Panel color="white" dir="up" className="panel"
                    canMove={this.props.points[13].canMove}
                    canReceive={this.props.points[13].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[13].player,this.props.points[13].checkers,1,this.props.points[13].canMove)}</Panel>
                    <Panel color="black" dir="up" className="panel"
                    canMove={this.props.points[14].canMove}
                    canReceive={this.props.points[14].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[14].player,this.props.points[14].checkers,1,this.props.points[14].canMove)}</Panel>
                    <Panel color="white" dir="up" className="panel"
                    canMove={this.props.points[15].canMove}
                    canReceive={this.props.points[15].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[15].player,this.props.points[15].checkers,1,this.props.points[15].canMove)}</Panel>
                    <Panel color="black" dir="up" className="panel"
                    canMove={this.props.points[16].canMove}
                    canReceive={this.props.points[16].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[16].player,this.props.points[16].checkers,1,this.props.points[16].canMove)}</Panel>
                    <Panel color="white" dir="up" className="panel"
                    canMove={this.props.points[17].canMove}
                    canReceive={this.props.points[17].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[17].player,this.props.points[17].checkers,1,this.props.points[17].canMove)}</Panel>

                                           <div className="jailUp"> {DisplayCheckers("player1", this.props.jail.player1,1)}</div>

                    <Panel color="black" dir="up" className="panel"
                    canMove={this.props.points[18].canMove}
                    canReceive={this.props.points[18].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[18].player,this.props.points[18].checkers,1,this.props.points[18].canMove)}</Panel>
                    <Panel color="white" dir="up" className="panel"
                    canMove={this.props.points[19].canMove}
                    canReceive={this.props.points[19].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[19].player,this.props.points[19].checkers,1,this.props.points[19].canMove)}</Panel>
                    <Panel color="black" dir="up" className="panel"
                    canMove={this.props.points[20].canMove}
                    canReceive={this.props.points[20].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[20].player,this.props.points[20].checkers,1,this.props.points[20].canMove)}</Panel>
                    <Panel color="white" dir="up" className="panel"
                    canMove={this.props.points[21].canMove}
                    canReceive={this.props.points[21].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[21].player,this.props.points[21].checkers,1,this.props.points[21].canMove)}</Panel>
                    <Panel color="black" dir="up" className="panel"
                    canMove={this.props.points[22].canMove}
                    canReceive={this.props.points[22].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[22].player,this.props.points[22].checkers,1,this.props.points[22].canMove)}</Panel>
                    <Panel color="white" dir="up" className="panel"
                    canMove={this.props.points[23].canMove}
                    canReceive={this.props.points[23].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[23].player,this.props.points[23].checkers,1,this.props.points[23].canMove)}</Panel>
                </div>





                        <span className="rollingInTheDeep">
                        <RollArea
                                        gameStatus={this.props.gameStatus}
                                        dices={this.props.dices}
                                        rolldices={this.props.rolldices}
                                        p1IsNext={this.props.p1IsNext}
                                        volume={this.props.volume}
                                        />
                        </span>
            





                <div className="boardbottom">
                    <Panel color="black" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[11].canMove}
                    canReceive={this.props.points[11].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[11].player,this.props.points[11].checkers,1,this.props.points[11].canMove)}</Panel>
                    <Panel color="white" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[10].canMove}
                    canReceive={this.props.points[10].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[10].player,this.props.points[10].checkers,1,this.props.points[10].canMove)}</Panel>
                    <Panel color="black" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[9].canMove}
                    canReceive={this.props.points[9].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[9].player,this.props.points[9].checkers,1,this.props.points[9].canMove)}</Panel>
                    <Panel color="white" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[8].canMove}
                    canReceive={this.props.points[8].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[8].player,this.props.points[8].checkers,1,this.props.points[8].canMove)}</Panel>
                    <Panel color="black" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[7].canMove}
                    canReceive={this.props.points[7].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[7].player,this.props.points[7].checkers,1,this.props.points[7].canMove)}</Panel>
                    <Panel color="white" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[6].canMove}
                    canReceive={this.props.points[6].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[6].player,this.props.points[6].checkers,1,this.props.points[6].canMove)}</Panel>

                                     <div className="jailDown"> {DisplayCheckers("player2", this.props.jail.player2,1)}</div>

                    <Panel color="black" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[5].canMove}
                    canReceive={this.props.points[5].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[5].player,this.props.points[5].checkers,1,this.props.points[5].canMove)}</Panel>
                    <Panel color="white" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[4].canMove}
                    canReceive={this.props.points[4].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[4].player,this.props.points[4].checkers,1,this.props.points[4].canMove)}</Panel>
                    <Panel color="black" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[3].canMove}
                    canReceive={this.props.points[3].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[3].player,this.props.points[3].checkers,1,this.props.points[3].canMove)}</Panel>
                    <Panel color="white" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[2].canMove}
                    canReceive={this.props.points[2].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[2].player,this.props.points[2].checkers,1,this.props.points[2].canMove)}</Panel>
                    <Panel color="black" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[1].canMove}
                    canReceive={this.props.points[1].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[1].player,this.props.points[1].checkers,1,this.props.points[1].canMove)}</Panel>
                    <Panel color="white" dir="bottom" className="panel" down="down"
                    canMove={this.props.points[0].canMove}
                    canReceive={this.props.points[0].canReceive}
                    volume={this.props.volume}
                    > {DisplayCheckers("player"+this.props.points[0].player,this.props.points[0].checkers,1,this.props.points[0].canMove)}</Panel>
                </div>

             </div>
       
        )
    }
}


export default Board
