import {Directions} from "./directions";
import { Map } from "./map";

export class Rover {

  private direction: string;
  // TODO: Maybe this should be in a separated class?
  private parsedCommands: any;
  private y: number;
  private x: number;
  private map: Map;

  constructor(map: Map) {
    this.direction = Directions.North;
    this.parsedCommands = {};
    this.y = 0;
    this.x = 0;
    this.map = map
  }

  parseCommands(commands: string) {
    if(commands.trim() == ""){
      throw new Error("Commands cannot be empty")
    }

    const lines = commands.split("|")
    if(lines.length != 2){
      throw new Error("Commands must contains just 2 lines")
    }

    const firstLine = lines[0]
    const lineSeparated = firstLine.split(",")
    const xIsNotNumber = isNaN(parseInt(lineSeparated[0]))
    const yIsNotNumber = isNaN(parseInt(lineSeparated[1]))
    const directionIsNotCorrect = !["N", "W", "E", "S"].some(letter => letter == lineSeparated[2])
    
    if(xIsNotNumber || yIsNotNumber || directionIsNotCorrect){
      throw new Error("First command line must follow next structure: number, number, direction letter")
    }

    const secondLine = lines[1]
    const secondLineSplit = secondLine.split("")    
    const letterIsNotMovementLetter = secondLineSplit.some(letter => !["L","R","M"].includes(letter))
    if(letterIsNotMovementLetter){
      throw new Error("Letters from second line must contain L, R or M")
    }

    this.map.max_x
    return commands
  }

  execute(commands: string) {
    this.parsedCommands = this.parseCommands(commands);


    this.y = this.parsedCommands.starting_position.y;
    this.x = this.parsedCommands.starting_position.x;
    this.direction = this.parsedCommands.starting_position.d;

    for (const movement of this.parsedCommands.moving_command) {
      this.move(movement);
    }
    return this.x + ' ' + this.y + ' ' + this.direction;
  }

  /**
   * @param direction String
   */
  move(movement: string) {

    switch (movement) {
      case 'L':
        this.turnLeft();
        break;
      case 'R':
        this.turnRight();
        break;
      case 'M':
        this.moveForward();
        break;
    }

  }

  turnLeft() {
    switch (this.direction) {
      case Directions.North:
        this.direction = Directions.West;
        break;
      case Directions.West:
        this.direction = Directions.South;
        break;
      case Directions.South:
        this.direction = Directions.East;
        break;
      case Directions.East:
        this.direction = Directions.North;
        break;
    }
  }

  turnRight() {
    switch (this.direction) {
      case Directions.North:
        this.direction = Directions.East;
        break;
      case Directions.East:
        this.direction = Directions.South;
        break;
      case Directions.South:
        this.direction = Directions.West;
        break;
      case Directions.West:
        this.direction = Directions.North;
        break;
    }
  }

  moveForward() {
    switch (this.direction) {
      case Directions.North:
        this.y = this.y + 1;
        break;
      case Directions.East:
        this.x = this.x + 1;
        break;
      case Directions.South:
        this.y = this.y - 1;
        break;
      case Directions.West:
        this.x = this.x - 1;
        break;
    }
  }


}