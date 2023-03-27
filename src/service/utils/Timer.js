class Timer {
    constructor(ms, onTick, onFinish) {
        const ticks = Math.floor(ms / 1000);
        this.secs = ticks % 60;
        this.mins = Math.floor(ticks / 60);
        this.onTick = onTick;
        this.onFinish = onFinish;
        this.ticker = setInterval(() => {
            this.tick();
        }, 1000);
    }

    tick() {
        this.secs -= 1;
        if (this.secs < 0) {
            this.secs = 59;
            this.mins -= 1;
        }
        if (this.mins < 0) {
            this.onFinish();
            clearInterval(this.ticker);
        } else {
            this.onTick(this.toTimeString());
        }
    }

    toTimeString() {
        return `${this.mins === 0 ? '' : `${this.mins} mins`} ${
            this.secs
        } secs`;
    }
}

export default Timer;
