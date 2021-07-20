class CustomError extends Error {
  constructor(message = null) {
    super(message);
    this.name = this.constructor.name;
  }
}

/**
 * The selection is not in a state we expect
 */
export class SelectionError extends CustomError {
}

export class MisbehavedSelectionError extends SelectionError {
  constructor() {
    super("Unexpected selection without anchor or focus");
  }
}
