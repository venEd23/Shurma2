import { Interface } from "node:readline";
import React from "react";
import style from "./CardList.module.scss";

type TProps = {
  title: string,
  numberCount: string
}

type TState = {
  firstCount: number,
  secondCount: number
}

class CardListItem extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props)

    this.state = {
      firstCount: 0,
      secondCount: 0
    }
  }

  plusOne = (): boolean => {
    const { firstCount } = this.state;
    const newCount = firstCount + 1
    this.setState({ firstCount: newCount })

    return true
  }

  minusOne = () => {
    const { firstCount } = this.state
    if (firstCount > 0) {
      this.setState({ firstCount: firstCount - 1 })
    }
  }

  plusSecond = () => {
    const { secondCount } = this.state
    this.setState({ secondCount: secondCount + 1 })
  }

  minusSecond = () => {
    const { secondCount } = this.state
    if (secondCount > 0) {
      this.setState({ secondCount: secondCount - 1 })
    }
  }

  render() {
    const { title } = this.props;
    const { numberCount } = this.props;
    const { firstCount } = this.state
    const { secondCount } = this.state

     return (
      <>
        <h3>Шаурма номер {numberCount}</h3>
        <div>{title}</div>
        <div className={style.div}>Основа - шаурма свиная большая</div>

        <div className={style.div}>Добавка - белый соус</div>
        <p>{firstCount}</p>
        <button type="button" onClick={this.plusOne}>
          Добавить
        </button>
        <button type="button" onClick={this.minusOne}>
          Убрать
        </button>

        <div className={style.div}>Добавка - красный соус</div>
        <p>{secondCount}</p>
        <button type="button" onClick={this.plusSecond}>
          Добавить
        </button>
        <button type="button" onClick={this.minusSecond}>
          Убрать
        </button>
      </>
    ); 
  }
}

export default CardListItem;
