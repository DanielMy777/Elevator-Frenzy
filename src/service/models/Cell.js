import Timer from './../utils/Timer';

class Cell {
    constructor() {
        this.text = '';
        this.onTextChanged = () => {};
    }

    setOnTextChanged(action) {
        this.onTextChanged = action;
    }

    setText(text) {
        this.text = text;
        this.onTextChanged(text);
    }

    async addCountdown(ms) {
        new Timer(
            ms,
            (t) => this.setText(t),
            () => this.setText('')
        );
    }
}

export default Cell;
