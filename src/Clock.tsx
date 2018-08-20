interface IClockState {
    date: Date;
}

class Clock extends React.Component<any, IClockState> {
    private timerID: NodeJS.Timer;

    constructor(props: any) {
        super(props);
        this.state = { date: new Date() };
        this.timerID = {} as NodeJS.Timer
    }

    public componentDidMount(): void {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    public componentWillUnmount(): void {
        clearInterval(this.timerID);
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

    private tick(): void {
        this.setState({
            date: new Date()
        });
    }
}