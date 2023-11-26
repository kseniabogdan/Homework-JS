"use strict";

{
    function Bulb() {

        this.state = false;
        this.on = function () {
            this.state = true;
            console.log("Калькулятор включён");
            bulbs.read();
            bulbs.powerHour();
            bulbs.powerDay();
            bulbs.powerMonth();
            bulbs.off();
        };

        this.off = function () {
            this.state = false;
            console.log("Калькулятор выключен");

        };

        this.read = function () {
            this.w = +prompt('Введите мощность лампочки в ваттах', 60);
            this.h = +prompt('Введите количество часов работы лампочки в день', 1);
            this.d = +prompt('Введите количество дней работы лампочки в месяце', 30);

        };

        this.powerHour = function () {
            if (this.state === false) {
                console.log('Включите калькулятор');
            }
            else {
                if (this.w <= 0) {
                    console.log('Введите значение мощности больше нуля');
                }
                else {
                    console.log(`Ваша лампочка потребляет ${this.w / 1000} кВт в час`)
                }
            }
        };

        this.powerDay = function () {
            if (this.state === false) {
                console.log('Включите калькулятор');
            }
            else {
                if (this.h > 0) {
                    console.log(`Ваша лампочка потребляет ${this.w * this.h / 1000} кВт в день при работе ${this.h} часа(ов)`)
                }
            }
        };

        this.powerMonth = function () {
            if (this.state === false) {
                console.log('Включите калькулятор');
            }
            else {
                if (this.d > 0) {
                    console.log(`Ваша лампочка потребляет ${this.w * this.h * this.d / 1000} кВт в месяц при работе ${this.d} дней и ${this.d * this.h} часов`)
                }
            }
        };

    }
    let bulbs = new Bulb();
    bulbs.on();
}


{
    function Credit() {

        this.state = false;
        this.on = function () {
            this.state = true;
            console.log("Калькулятор включён");
            credit.read();
            credit.creditInfo();
            credit.sumAmont();
            credit.sumAll();
            credit.off();
        };

        this.off = function () {
            this.state = false;
            console.log("Калькулятор выключен");
        };

        this.read = function () {
            this.s = +prompt('Введите желаемую сумму кредита в диапазоне 300 - 10 000 руб', 300);
            this.m = +prompt('Введите количество месяцев пользования кредитом в диапазоне от 6 до 24 месяца', 6);
        };

        this.creditInfo = function () {
            if (this.state === false) {
                console.log('Включите калькулятор');
            }
            else {
                if (this.s >= 300 && this.s <= 10000 && this.m >= 6 && this.m <= 24) {
                    console.log(`Расчет кредита в сумме ${this.s} руб. на срок ${this.m} месяца(ев) по ставке 14% годовых:`)
                }
                else {
                    console.log(`Сумма или срок кредита выходят за предложенные диапазоны`)
                }
            }
        };


        this.sumAmont = function () {
            if (this.state === false) {
                console.log('Включите калькулятор');
            }
            else {
                if (this.s >= 300 && this.s <= 10000 && this.m >= 6 && this.m <= 24) {
                    let sumAm = this.s * this.m *14 / 12 /100;
                    console.log(`Переплата по кредиту составит ${sumAm.toFixed(2)} руб.`)
                }
                else {
                    console.log(`Сумма или срок кредита выходят за предложенные диапазоны`)
                }
            }
        };

        this.sumAll = function () {
            if (this.state === false) {
                console.log('Включите калькулятор');
            }
            else {
                if (this.s >= 300 && this.s <= 10000 && this.m >= 6 && this.m <= 24) {
                    let sumAl = (this.s * this.m *14 / 12 /100) + this.s;
                    console.log(`Общая сумма оплаты по кредиту составит ${sumAl.toFixed(2)} руб.`)
                }
                else {
                    console.log(`Сумма или срок кредита выходят за предложенные диапазоны`)
                }
            }
        };
    }

    let credit = new Credit();
    credit.on();
}








