// Наследование
// {}

class Auto {
    constructor(model, year){
        this.model = model
        this.year = year
        this.speed = 0
    }
    driving(speed){
        this.speed = speed
        console.log(`${this.model} разогналась до ${this.speed} км/ч`);
    }
    parking(){
        this.speed = 0
        console.log(`${this.model} припарковался!`);
    }
}
let tesla = new Auto('Tesla', '2020')
tesla.driving(100)
tesla.parking()
console.log(tesla);



// ------------------------------------------------------------------------------------------
// Пример наследования класса Auto

// Наследование происходи[ благодаря оператору extends с указанием имя наследумого класса
// Для того, чтобы унаследовать и использовать сво-ва ранее указанного класса, 
// необходимо получить их в constructor и поместить в метод super()


class SuperCar extends Auto{
    constructor(model, year){
        super(model, year)
        this.lights = false
    }
    setLights(){
        this.lights = !this.lights
        console.log(`${this.model} ${this.lights ? 'включил' : 'выключил'} фары`);
    }
    getInfo(){
        console.log(`Информация автомобиля ${this.model} ${this.year} года выпуска: `);
        console.log(`Скорость автомобиля ${this.speed} км/ч`);
        console.log(this.lights ? 'Фары включены' : 'Фары выключены' );
    }
}
let mercedesBenz = new SuperCar('MercedesBenz', '2024')
// mercedesBenz.driving(150)
// mercedesBenz.parking()

// mercedesBenz.setLights()
// mercedesBenz.setLights()

mercedesBenz.getInfo()
console.log(mercedesBenz); // -> SuperCar { model: 'MercedesBenz', year: '2024', speed: 0, lights: false }


// После наслодвание родителський класс ни каким образом менять не будет
let audi = new Auto('Audi', '2020')
console.log(audi);
