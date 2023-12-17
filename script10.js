"use strict";

{
    function Credit() {

        this.state = false;
        this.on = function () {
            this.state = true;
            alert("Кредитный калькулятор включён");
            this.read();
            this.creditInfo();
            this.sumAmont();
            this.sumAll();
            this.off();
        };

        this.off = function () {
            this.state = false;
            alert("Кредитный калькулятор выключен");
        };

        this.read = function () {
            this.s = +prompt('Введите желаемую сумму кредита в диапазоне 300 - 10 000 руб', 300);
            this.m = +prompt('Введите количество месяцев пользования кредитом в диапазоне от 6 до 24 месяца', 12);
        };

        this.creditInfo = function () {
            if (this.state === false) {
                alert('Включите калькулятор');
            }
            else {
                if (this.s >= 300 && this.s <= 10000 && this.m >= 6 && this.m <= 24) {
                    alert(`Расчет кредита в сумме ${this.s} руб. на срок ${this.m} месяца(ев) по ставке 14% годовых:`)
                }
                else {
                    alert(`Сумма или срок кредита выходят за предложенные диапазоны`)
                }
            }
        };


        this.sumAmont = function () {
            if (this.state === false) {
                alert('Включите калькулятор');
            }
            else {
                if (this.s >= 300 && this.s <= 10000 && this.m >= 6 && this.m <= 24) {
                    this.sumAm = this.s * this.m *14 / 12 /100;
                    alert(`Переплата по кредиту составит ${this.sumAm.toFixed(2)} руб.`)
                }
                else {
                    alert(`Сумма или срок кредита выходят за предложенные диапазоны`)
                }
            }
        };

        this.sumAll = function () {
            if (this.state === false) {
                alert('Включите калькулятор');
            }
            else {
                if (this.s >= 300 && this.s <= 10000 && this.m >= 6 && this.m <= 24) {
                    this.sumAl = (this.s * this.m *14 / 12 /100) + this.s;
                    alert(`Общая сумма оплаты по кредиту составит ${this.sumAl.toFixed(2)} руб.`)
                }
                else {
                    alert(`Сумма или срок кредита выходят за предложенные диапазоны`)
                }
            }
        };
    }

    let credit = new Credit();
    credit.on();

    function CreditShow() {

        document.write(`Расчет кредита в сумме ${this.s} руб. на срок ${this.m} месяца(ев) по ставке 14% годовых:</br>`)
        document.write(`Переплата по кредиту составит ${this.sumAm.toFixed(2)} руб.</br>`)
        document.write(`Общая сумма оплаты по кредиту составит ${this.sumAl.toFixed(2)} руб.</br>`)
    }

    CreditShow.prototype = credit
    let creditShow = new CreditShow();

    function CreditOption() {

        Credit.apply(this);
        this.s = credit.s
        document.write('-------------------------------------------------------</br>')
        document.write(`Альтернативный вариант расчета кредита в сумме ${this.s} руб. на минимальный срок 6 месяца(ев) по ставке 14% годовых:</br>`)
        this.sumAm = this.s * 6 *14 / 12 /100;
        this.sumAl = (this.s * 6 *14 / 12 /100) + this.s;
        document.write(`Переплата по кредиту составит ${this.sumAm.toFixed(2)} руб.</br>`)
        document.write(`Общая сумма оплаты по кредиту составит ${this.sumAl.toFixed(2)} руб.</br>`)

    }

    let creditOption = new CreditOption();

}








