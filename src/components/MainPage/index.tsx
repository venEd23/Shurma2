import React from "react";
import CardListItem from "./CardListItem";
// import "./style.css";
import style from "./CardList.module.scss";

type TState = {
  numbers: Array<number>;
};

type TProps = {
  numbers: Array<number>;
};

class CardList extends React.Component<TProps, TState> {
  constructor(props: any) {
    super(props);
    this.state = {
      numbers: [1],
    };
  }

  addItem = () => {
    const { numbers } = this.state;
    this.setState({ numbers: numbers.concat(numbers.length + 1) });
  };

  render() {
    const { numbers } = this.state;

    const listItems = numbers.map((number) => (
      <CardListItem
        title="Состав:"
        numberCount={number.toString()}
        key={number.toString()}
      />
    ));

    return (
      <>
        <h1 className={style.h1} style={{ color: "red" }}>
          {" "}
          Магазин шурмы Восточные сказки
        </h1>

        <div className={style.block}>
          Ваш заказ
          {listItems}
        </div>

        <div>
          <button type="button" onClick={this.addItem}>
            Добавить
          </button>
        </div>

        <footer className={style.footer}>
          Стрелочные функции не имеют своего this (c) LearnJavascript
        </footer>
      </>
    );
  }
}

export default CardList;
