import React, { Component } from 'react';
import './Game.css';
import '../statusBar/StatusBar';
import Board from '../board/Board';
import StatusBar from '../statusBar/StatusBar';
import Outcheckers from '../outcheckers/Outcheckers';
import NewGame from '../NewGame/NewGame';
import Menu from '../Menu';
import StatusPanel from '../statusPanel/StatusPanel';
import SoundController from '../soundController/SoundController';
import Fade from 'react-reveal';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';




export class Game extends Component {
  
    //Initial state
    state = {
        gameStatus: 80, //not started
        history: [],
        currentPosition: 0,
        p1IsNext: true,
        dice: [0],
        diceSave:[0],
        diceNoMove:[0],
        points: Array(24).fill({ player: false, checkers: 0 }),
        jail: { player1: 0, player2: 0},
        outcheckers: { player1: 15, player2: 15 },
        movingChecker: false,
        players: { p1: 'Player 1', p2: 'Player 2' },
        gameOver: true,
        volume:1,
        playerdone:true,
    }




    



/*Simple Functions*/ 

    //Get the game status
    getGameStatus = () => {
        switch (this.state.gameStatus) {
            case 11: return "New game";
            case 20: return "Roll dice";
            case 30: return "Playing";
            case 31: return "Playing from jail";
            case 32: return "Bearing off";
            case 40: return "No die to play";
            case 50: return "No moves available";
            case 60: return "Player 1 wins";
            case 70: return "Player 2 wins";
            case 80: return "Not started";
            default: return this.state.gameStatus;
        }
    }
    //Return the player number 1 or 2.
    getPlayer = (p1IsNext) => p1IsNext ? 1 : 2;
    //Get points without actions. It creates a new object
    getPointsWithoutActions = (points) => points.map((point) => {
            return { player: point.player, checkers: point.checkers };
    });
    getoutcheckersWithoutActions = (outcheckers) => {
        return { player1: outcheckers.player1, player2: outcheckers.player2 }
    }
    getMovingChecker = (p1IsNext) => {
        let movingChecker;
        if (this.state.movingChecker !== false) { //Moving checker is assigned
            movingChecker = this.state.movingChecker;
        } else { //Checker coming from jail
            if (p1IsNext) {
                movingChecker = -1;
            }
            else {
                movingChecker = 24;
            }
        }
        return movingChecker;
    }
    //Set new history
    setHistory = (p1IsNext, dice, points, jail, outcheckers, gameStatus) => {

            const history = {
                p1IsNext: p1IsNext,
                dice: [...dice],
                points: [...points],
                jail: { ...jail },
                outcheckers: { ...outcheckers },
                gameStatus: gameStatus,
            }
            return history;
    }
        
       




/* "Black boxes" */ 

    //Check if player has all the checkers in the home board
    checkHomeBoard = (points, p1IsNext) => {

        //Checkers in homeboard. If true it's good to go outside
        let homeBoard = true;

        //get points with actions
        points.map((point, index) => {

            //Check homeboard
            //Player 1
            if (p1IsNext && index <= 17
                && point.player === 1
            ) {
                homeBoard = false;
            }
            //Player 2
            else if (!p1IsNext && index >= 6
                && point.player === 2
            ) {
                homeBoard = false;
            }

            return null;

        });

        return homeBoard;

    }
    //Check if checker can bear off
    checkCanBearOff = (points, checker, p1IsNext, dice) => {

        let canBearOff = false;

        //Check if it is a player checker
        if (checker >= 0 && checker < 24 && points[checker].player === this.getPlayer(p1IsNext)) {

            for (let die of dice) {
                //check if the dice have the right number to bear off
                if ((p1IsNext && (checker + die) === 24) || (!p1IsNext && (checker - die) === -1)) {
                    canBearOff = die;
                }
            }

            if (!canBearOff) {

                const highDie = [...dice].sort().reverse()[0]; //Get the highest die
                let checkerBehind = false;//Check if there is checker behind the moving checker

                //die is more than necessary to bear off
                if ((p1IsNext && (checker + highDie) > 24) || (!p1IsNext && (checker - highDie) < -1)) {

                    if (p1IsNext) {
                        for (let i = 18; i < checker; i++) {
                            if (points[i].player && points[i].player === this.getPlayer(p1IsNext)) {
                                checkerBehind = true;
                            }
                        }
                    } else {
                        for (let i = 5; i > checker; i--) {
                            if (points[i].player && points[i].player === this.getPlayer(p1IsNext)) {
                                checkerBehind = true;
                            }
                        }
                    }

                    //If there is no checker behind, it can bear off
                    if (!checkerBehind) {
                        canBearOff = highDie;
                    }
                }
            }
        }
        return canBearOff;
    } 





/*Actual game functions*/ 

    undoHandler = () => {
        
        if (this.state.currentPosition>0 ){
        const history = [...this.state.history];
        const newPosition = this.state.currentPosition - 1;
        const p1IsNext = history[newPosition].p1IsNext;
        const dice = [...history[newPosition].dice];
        const jail = { ...history[newPosition].jail };
        const outcheckers = { ...history[newPosition].outcheckers };
        const movingChecker = false;

        // Do nor alloe undo after enter from jail
        const currentPosition=this.state.currentPosition;
            if(history[currentPosition].jail.player1<history[newPosition].jail.player1 ||
                history[currentPosition].jail.player2<history[newPosition].jail.player2 ){
                    alert("Cannot move the checker back to the jail- obligated move !")
                    return;
                }

        const moves = this.calculateCanMove(history[newPosition].points, dice, p1IsNext, jail);
        const points = moves.points;
        const gameStatus = moves.gameStatus;

        //remove last element from history
        history.pop();
        console.log("new history after Undo: ");
        console.log(history[history.length-1].points);

        this.setState({
            gameStatus: gameStatus,
            history: history,
            currentPosition: newPosition,
            p1IsNext: p1IsNext,
            dice: dice,
            diceSave:this.state.diceNoMove,
            points: points,
            jail: jail,
            outcheckers: outcheckers,
            movingChecker: movingChecker,
            playerdone:false
        });
    }
    }
        // Game Over
    gameOver = () => {

            if (this.state.gameOver) {
                return <NewGame
                    gameStatus={this.state.gameStatus}
                    setupNewGameHandler={this.setupNewGameHandler}
                    volume={this.state.volume}
                />;
            }
    
    } 
    

  



/*Complicated madafaka functions*/
 
    //set up new game
    setupNewGameHandler = () => {
        
        const gameStatus = 11; //New game
        const history = [];
        const currentPosition = 0
        const p1IsNext =  true ;
        const dice = [0];
        const diceSave=[0];
        const points = Array(24).fill({ player: false, checkers: 0 });
        const jail = { player1: 0, player2: 0 };
        const outcheckers = { player1: 0, player2: 0 };
        const movingChecker = false;
        const players = { p1: "player1", p2: "player2"};

        history.push(this.setHistory(p1IsNext, dice, this.getPointsWithoutActions(points), jail, outcheckers));

        //set point
        points[0] = { player: 1, checkers: 2 };
        points[11] = { player: 1, checkers: 5 };
        points[16] = { player: 1, checkers: 3 };
        points[18] = { player: 1, checkers: 5 };
        points[23] = { player: 2, checkers: 2 };
        points[12] = { player: 2, checkers: 5 };
        points[7] = { player: 2, checkers: 3 };
        points[5] = { player: 2, checkers: 5 };

     

        this.setState({
            gameStatus: gameStatus,
            history: history,
            currentPosition: currentPosition,
            p1IsNext: p1IsNext,
            dice: dice,
            diceSave: diceSave,
            points: points,
            jail: jail,
            outcheckers: outcheckers,
            movingChecker: movingChecker,
            players: players,
            gameOver:false,
            playerdone:true
        });

    }

    //Roll dices
    rollDiceHandler = () => {

        let p1IsNext =  this.state.p1IsNext;
        let dice = [];
        let diceSave=[];
        dice.push(Math.floor(Math.random() * 6) + 1);
        dice.push(Math.floor(Math.random() * 6) + 1);
        if (dice[0] === dice[1]) {
            dice[2] = dice[3] = dice[0];
        }
        diceSave=[...dice];
        const diceNoMove=[...dice]; // to status bar-  to show number of dices when no moves avaliable and dice are deleted
        this.setState({diceNoMove:diceNoMove});
        console.log("Rolled dice: " + dice);

        //Get moves and status after calculating moves option
        const moves = this.calculateCanMove(
            this.getPointsWithoutActions(this.state.points),
            dice,
            p1IsNext,
            this.state.jail
        );

        //get points and status
        const points = moves.points;
        let gameStatus = moves.gameStatus;
       
        //reset history
        const currentPosition = 0;
        const history = [];
        history.push(this.setHistory(
            p1IsNext,
            dice,
            this.getPointsWithoutActions(points),
            this.state.jail,
            this.state.outcheckers,
            gameStatus
        ));
        
        

        //If no moves avaliable
        if (gameStatus===50){
            p1IsNext=!p1IsNext;
            dice[0]=0;
            diceSave[0]=0;
            this.setState({
                gameStatus: gameStatus,
                points: points,
                dice: dice,
                diceSave:diceSave,
                p1IsNext: p1IsNext,
            });      
        }
        //Set new state
        else{
        this.setState({
            gameStatus: gameStatus,
            history: history,
            currentPosition: currentPosition,
            points: points,
            dice: dice,
            diceSave:diceSave,
            p1IsNext: p1IsNext,
            playerdone:false
        });
     }
    }

    //Calculate possible moves return an object with new points and game status
    calculateCanMove = (points, dice, p1IsNext, jail) => {
        console.log("calculateCanMove");
        
        let newPoints = [...points];
        let gameStatus = 50; //No moves available
        
        if (!dice[0]) {gameStatus = 40; } // No dice to play
       
        else {

            //check if there is checker in jail
            if ((p1IsNext && jail.player1) ||
                (!p1IsNext && jail.player2)) {
                for (let die of dice) {
                    const destination = p1IsNext ? die - 1 : 24 - die;
                    if (points[destination].player === this.getPlayer(p1IsNext) || //point belongs to user
                        points[destination].checkers < 2) { //point is empty or belongs to other user but with only one checker
                        newPoints[destination].canReceive = this.receiveCheckerHandler.bind(this, die);
                        gameStatus = 31; //Playing from jail
                    }
                    this.setState({movingChecker:false});
                }
            }

            else {
                //check if all checkers in homeboard
                const inHomeBoard = this.checkHomeBoard(newPoints, p1IsNext); 
               //check all panels on board
                for (let index = 0; index < points.length; index++) {
                    let canMove = false;
                    //check if checkers on a panel can move with the dices
                    if (points[index].player === this.getPlayer(p1IsNext)) {
                        for (let die of dice) {
                            const destination = p1IsNext ? index + die : index - die;
                            if (!canMove && destination < 24 && destination >= 0) {
                                if (points[destination].player === this.getPlayer(p1IsNext) ||
                                    points[destination].checkers < 2) {
                                    canMove = true;
                                    gameStatus = 30; //Playing
                                }
                            }
                        }
                    }
                    //check if can bear off
                    if (inHomeBoard && ((p1IsNext && index >= 18) || (!p1IsNext && index <= 5))) {
                        if (this.checkCanBearOff(points, index, p1IsNext, dice)) {
                            canMove = true;
                            gameStatus = 32; //Bearing off
                        }
                    }
                    // change the status of the checker
                    if (canMove) {
                        newPoints[index].canMove = this.moveCheckerHandler.bind(this, index);
                    }
                }
            }
        }
        console.log("Moving checker end of calc: "+this.state.movingChecker);
        
        return { points: newPoints, gameStatus: gameStatus };
    }

    //Clicked checker marks the optional panels to move to and mark them as !!!receiveCheckerHandler!!!
    moveCheckerHandler = (checker) => {

        let gameStatus = 30; //playing
        const p1IsNext = this.state.p1IsNext;
        const outcheckers = this.getoutcheckersWithoutActions(this.state.outcheckers);
        let points = this.getPointsWithoutActions(this.state.points);
        
        // if clicked twice- cancel the mark as movingchecker
        const movingChecker = checker !== this.state.movingChecker ? checker : false;

        //if there is clicked checeker
        if (movingChecker !== false) {
           
            //add action to the moving checker. This uncheck the moving checker
            points[movingChecker].canMove = this.moveCheckerHandler.bind(this, movingChecker);

            //mark the two optional panels to moce if playing inside the board
            for (let die of this.state.dice) {
                const destination = p1IsNext ? movingChecker + die : movingChecker - die;
                if (destination < 24 && destination >= 0) {
                    //Check if destnation can receive the checker
                    if (points[destination].player === this.getPlayer(p1IsNext) ||
                        points[destination].checkers < 2) {
                        // mark them as !!!receiveCheckerHandler!!!
                        points[destination].canReceive = this.receiveCheckerHandler.bind(this, die); 

                    }
                }
            }

            //Bearing off
            if (this.checkHomeBoard(points, p1IsNext) &&
                ((p1IsNext && movingChecker >= 18) || (!p1IsNext && movingChecker <= 5))) {
                    console.log("Home board clean");
                //Get the dice to bear off with
                let die = this.checkCanBearOff(points, movingChecker, p1IsNext, this.state.dice);
                // mark outCheckers as !!!receiveCheckerHandler!!! 
                if (die) {
                        console.log("Can bear off");
                    if (p1IsNext) {
                        outcheckers.p1CanReceive = this.receiveCheckerHandler.bind(this, die);                        
                    } else {
                        outcheckers.p2CanReceive = this.receiveCheckerHandler.bind(this, die);
                    }
                    gameStatus = 32; //Bearing off
                }
                
            }

            console.log("moving checker from point " + (p1IsNext ? movingChecker + 1 : 24 - movingChecker));
        }
        //if checker is clicked twice- search new moves avaliavle again
        else {
            const moves = this.calculateCanMove(points, this.state.dice, this.state.p1IsNext, this.state.jail);
            points = moves.points;
            gameStatus = moves.gameStatus;
        }


        //Set new state
        this.setState({
            gameStatus: gameStatus,
            points: points,
            movingChecker: movingChecker,
            outcheckers: outcheckers,
        })

    }

    //Receive checker into the point
    receiveCheckerHandler = (die) => {
        console.log("receiveCheckerHandler ");
        
        const jail = { ...this.state.jail };
        const outcheckers = this.getoutcheckersWithoutActions(this.state.outcheckers);
        const dice = [...this.state.dice];
        let p1IsNext = this.state.p1IsNext;
        let points = this.state.points;
        let movingChecker = this.getMovingChecker(p1IsNext); //get the moving checker or jail (-1 or 24)
        let gameStatus = 30; //playing
        const destination = p1IsNext ? movingChecker + die : movingChecker - die; // the panel the checker moving to
        console.log("destination: "+destination+" movingCgckers: "+movingChecker);

        //Logging
        if (destination > 23 || destination < 0) {
            console.log('Bearing off Checker');
        } else {
            console.log('Moving checker to point ' + (p1IsNext ? destination : 24 - destination));
        }




        /*Removing */
        //Remove the checker from orign and clean point if it has no checker
        if (movingChecker >= 0 && movingChecker <= 23 &&  points[movingChecker]) {
            points[movingChecker].checkers--;
            if (points[movingChecker].checkers === 0) {
                points[movingChecker].player = false; 
            }
        }
        //remove from jail
        else { 
            if (movingChecker === -1) {//remove p1 from gray bar
                jail.player1--;                
            }
            else if (movingChecker === 24) { //remove p2 from gray bar
                jail.player2--;
            }

        }







        /*Adding */
        //Moving checker inside the board
        if (destination <= 23 && destination >= 0) {
            //Point either belongs to player or to nobody
            if (points[destination].player === this.getPlayer(p1IsNext)
                || points[destination].player === false) { 
                points[destination].player=this.getPlayer(p1IsNext);
                points[destination].checkers++;
            }
            //Destination has different player with 1 checker, send to jail.
            else { 
                if (p1IsNext) {
                    jail.player2++
                } else {
                    jail.player1++
                }
            }
            //Assign destination point to player. In this case destination has only one checker
            points[destination].player = this.getPlayer(p1IsNext);
        }
        //If not playing inside, it mens the checker is bearing off
        else {
            if (p1IsNext) {
                outcheckers.player1++;
            } else {
                outcheckers.player2++;
            }
        }







        /*Reseting to find new moves after checker moved*/
        movingChecker = false; // cancel moving checker
        const diceIndex = dice.findIndex((dieNumber) => dieNumber === die); // remove the die played
        dice.splice(diceIndex, 1);
        console.log("Played die " + die);
        for(let point of points){// reset all panels
                point.canReceive=false;
                point.canMove=false;}
        const moves = this.calculateCanMove(points, dice, p1IsNext, jail);// find new moves
        points = moves.points;
        gameStatus = moves.gameStatus;
        
       
       
        //Change player if no moves avaliable
        if (gameStatus===50) {
            dice[0] = 0;
            p1IsNext = !p1IsNext;
            this.setState(
               {diceSave:[0], playerdone:true}
            );
        }  
        if(dice.length===0){
            dice[0]=0;
            this.setState({diceSave:[0]});
        }
        






        //Add this move to the history in order to be able to Undo
        const currentPosition = this.state.currentPosition + 1;
        const history = [...this.state.history];
        history.push(this.setHistory(p1IsNext, dice,this.getPointsWithoutActions(points), jail, outcheckers));










        //Check if we have a winner
        if (outcheckers.player1 === 15) {
            gameStatus = 60; //Player one wins
            this.setState({gameOver:true});
        } else if (outcheckers.player2 === 15) {
            gameStatus = 70; //Player two wins
            this.setState({gameOver:true});
        }
        
        



        
        this.setState({
            gameStatus: gameStatus,
            history: history,
            currentPosition: currentPosition,
            p1IsNext: p1IsNext,
            dice: dice,
            points: points,
            jail: jail,
            outcheckers: outcheckers,
            movingChecker: false,
        })


    }

   




    /*New funcions */
    changeVolume=(volume)=>{
        this.setState({volume:volume});
    }

    changePlayer=()=>{
        console.log("Done");

        this.setState(
           {dice:[0],diceSave:[0], p1IsNext:!this.state.p1IsNext, playerdone:true,currentPosition:0}
        );
        
    }










    render() {
        return (
            <div className="game">

                <Bounce left>
                <StatusBar
                points={this.state.points}
                jail= {this.state.jail}
                gameStatus= {this.state.gameStatus}
                p1IsNext={this.state.p1IsNext}
                />
                </Bounce>
                <Bounce right>
                <Menu/>
                </Bounce>

            
                <div>
                    <Flip top>
                    <StatusPanel
                    gameStatus= {this.state.gameStatus}
                    p1IsNext={this.state.p1IsNext}
                    diceNoMove={this.state.diceNoMove}
                    />
                    </Flip >
                    <Fade up duration={1500} distance="100px">
                    <div className="gamezone">
                    <SoundController 
                    changeVolume={this.changeVolume}
                    />
                    <Board 
                    points={this.state.points}
                    jail={this.state.jail}
                    gameStatus={this.state.gameStatus}
                    dices={this.state.diceSave}
                    rolldices={this.rollDiceHandler}
                    p1IsNext={this.state.p1IsNext}
                    volume={this.state.volume}
                    playerdone={this.state.playerdone}
                    changePlayer={this.changePlayer}
                    />  
                    <Outcheckers 
                    out={this.state.outcheckers}
                    undo={this.undoHandler}
                    volume={this.state.volume}
                    />
                     </div>
                     </Fade>
                </div>
                
                {this.gameOver()}

            </div>           
        )
    }
}
export default Game



