import { Space, Button, Card} from "antd";

import orders from "../orders.json";
import React from "react";
import ReactDOM from "react-dom";
import styles from '../css/main.module.css';



export class Orders extends React.Component {
    state = {
        data: orders,
        filter: 'All Orders'
    };
    componentDidMount(){
        document.title = `${orders.length.toString()} orders`
    }
    titleCase = (word:string) => {
        let ret = word.toLowerCase().split(" ");
        for (let i = 0; i < ret.length; i++) {
            ret[i] = ret[i][0].toUpperCase() + ret[i].slice(1);
        }

        return ret.join(" ");
    }
    formatStringDate = (_date: string) => {
        const _d = new Date(_date)
        const _ordinalDay = _d.getDate()
        let _tmp = _ordinalDay + "th "
        var j = _ordinalDay % 10,
            k = _ordinalDay % 100;
        if (j === 1 && k !== 11) {
            _tmp = _ordinalDay + "st ";
        }
        if (j === 2 && k !== 12) {
            _tmp = _ordinalDay + "nd ";
        }
        if (j === 3 && k !== 13) {
            _tmp = _ordinalDay + "rd ";
        }
        return _tmp  + _d.toLocaleString('default', { month: 'long' })+ " " + _d.toLocaleString('default', { year: 'numeric' });
};
    toggle = (_filter: string) => {
        if(_filter === ''){
            this.setState({filter: 'All Orders'})
            this.setState({data: orders} )
        }else{
            this.setState({data: orders.filter(item => item.orderStatus == _filter )
            });
            document.title = `${this.state.data.length.toString()} orders`
            if(_filter === 'inProgress'){
                this.setState({filter: 'In Progress'})
            }else{
                this.setState({filter: this.titleCase(_filter)})
            }
        }

    };

    render() {
        return (
            <div className={styles.container}>
                <h1>Orders App</h1>
                <hr />
                <Space className={styles.centred}>
                    <Button type="primary" onClick={() => this.toggle('accepted')}>
                        Accepted
                    </Button>
                    <Button className={styles.btnProgress} onClick={() => this.toggle('inProgress')}>
                        In Progress
                    </Button>
                    <Button type="dashed" onClick={() => this.toggle('complete')}>
                        Complete
                    </Button>
                </Space>
                <hr />
                <p className={(this.state.filter !== 'All Orders') ? styles.hidden : styles.block}>Showing: {this.state.filter}</p>
                <p className={(this.state.filter === 'All Orders') ? styles.hidden : styles.block} >Showing: <Button type="dashed" onClick={() => this.toggle('')}>
                    {this.state.filter} ({this.state.filter.length}) x
                </Button></p>
                {this.state.data.map(i => {
                        return   <Card className={styles.cardUpdate} key={i.id} title={i.productName} style={{ width: 300 }}>
                            <p>Order date: {this.formatStringDate(i.dateOrdered)}</p>
                            <p>Order status: <span className={(i.orderStatus === 'complete') ? styles.complete : styles.defaultStatus}>{(i.orderStatus === 'inProgress') ?'In Progress' : this.titleCase(i.orderStatus)}</span></p>
                        </Card>
                    })}
            </div>
        );
    };
}

ReactDOM.render(<Orders />, document.getElementById('root'));

