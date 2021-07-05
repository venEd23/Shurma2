import React from "react";
import CardListItem from "./CardListItem";
import style from "./CardList.module.scss";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import NavMenu from "../Common/NavElems";

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
        <div className={style.both}>
          <Header />
          <NavMenu />
        </div>

        <div className={style.block}>
          Ваш заказ:
          {listItems}
        </div>

        <div>
          <button
            type="button"
            className={style.addButton}
            onClick={this.addItem}>
            Добавить ещё одну
          </button>
        </div>

        <Footer />
      </>
    );
  }
}

export default CardList;
