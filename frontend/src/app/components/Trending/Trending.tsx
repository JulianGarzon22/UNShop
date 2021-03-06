import * as React from "react";
import "./styles.scss";
import { EPERM } from "constants";

interface Item {
    id: string;
    name: string;
    description: string;
    price: number;
}

export interface Props {}

export interface State {
    items: Item[];
}

class Trending extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch("/api/trending")
            .then(res => res.json())
            .then(data => {
                this.setState({ items: data });
            })
            .catch(console.log);
    }

    addListener = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
        
    }

    render() {
        return (
            <div>
                <div className="trend-title-box">
                    <img
                        className="trend-icon"
                        src="./images/icons/trending.svg"
                        alt=""
                    />
                    <span className="trend-title">Tendencias</span>
                </div>
                <div className="items-container">
                    {this.state.items!.map(item => (
                        <div className="item-box">
                            <div className="img-box">
                                <img
                                    className="img"
                                    src="./images/test_items/libro1.png"
                                    alt=""
                                />
                            </div>
                            <div className="text-box">
                                <span className="score"> {item.price} </span>
                                <br />
                                <span className="title">{item.name}</span>
                                <br />
                                <span className="autor">Jaime Arocha</span>
                                <label htmlFor="add">Añadir al carrito</label>
                                <input onChange={this.addListener} type="checkbox" name="add" id="add"/>
                                <div className="btn">
                                    <span className="btn-text">Ver más</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Trending;
