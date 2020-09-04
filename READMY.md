Напишите тесты для корзины интернет-магазина. Интерфейс:

    makeCart – создает новую корзину (объект).
    addItem(good, count) – добавляет в корзину товары и их количество.
                           Товар это объект у которого два свойства: name – имя и price – стоимость.
    getItems – возвращает товары в формате [{ good, count }, { good, count }, ...]
    getCost – возвращает стоимость корзины. Стоимость корзины высчитывается как
              сумма всех добавленных товаров с учетом их количества.
    getCount – возвращает количество товаров в корзине

const cart = makeCart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
cart.getItems().length; // 2
cart.getCost(); // 35
cart.addItem({ name: 'house', price: 10 }, 1);
cart.getItems().length; // 3
cart.getCost(); // 45