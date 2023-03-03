import {Directions} from "./directions";

export class Rover {

  private direction: string;
  // TODO: Maybe this should be in a separated class?
  private parsedCommands: any;
  private y: number;
  private x: number;

  constructor() {
    this.direction = Directions.North;
    this.parsedCommands = {};
    this.y = 0;
    this.x = 0;
  }

  parseCommands(commands: any) {

    return commands
  }

  execute(commands: any) {

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