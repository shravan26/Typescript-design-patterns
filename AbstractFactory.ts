namespace AbstractFactory {
    interface Furniture {
        createChair(): Chair;
        createSofa(): Sofa;
        createTable(): Table;
    }

    class VictorianFurniture implements Furniture {
        name: string;
        constructor() {
            this.name = "Victorian";
        }
        createChair(): Chair {
            return new VictorianChair(this.name);
        }

        createSofa(): Sofa {
            return new VictorianSofa(this.name);
        }

        createTable(): Table {
            return new VictorianTable(this.name);
        }
    }

    class ModernFurniture implements Furniture {
        name: string;
        constructor() {
            this.name = "Modern";
        }
        createChair(): Chair {
            return new ModernChair(this.name);
        }

        createSofa(): Sofa {
            return new ModernSofa(this.name);
        }

        createTable(): Table {
            return new ModernTable(this.name);
        }
    }

    interface Chair {
        name: string;
        sit(): string;
    }

    interface Sofa {
        name: string;
        sit(): string;
    }

    interface Table {
        name: string;
        sit(): string;
    }

    class ModernChair implements Chair {
        name: string;
        constructor(name: string) {
            this.name = name + "Chair";
        }
        sit(): string {
            return `Sitting on a ${this.name}`;
        }
    }

    class VictorianChair implements Chair {
        name: string;
        constructor(name: string) {
            this.name = name + "Chair";
        }
        sit(): string {
            return `Sitting on a ${this.name}`;
        }
    }

    class VictorianSofa implements Sofa {
        name: string;
        constructor(name: string) {
            this.name = name + "Sofa";
        }
        sit(): string {
            return `Sitting on a ${this.name}`;
        }
    }

    class ModernSofa implements Sofa {
        name: string;
        constructor(name: string) {
            this.name = name + "Sofa";
        }
        sit(): string {
            return `Sitting on a ${this.name}`;
        }
    }

    class ModernTable implements Table {
        name: string;
        constructor(name: string) {
            this.name = name + "Table";
        }
        sit(): string {
            return `Sitting on a ${this.name}`;
        }
    }

    class VictorianTable implements Table {
        name: string;
        constructor(name: string) {
            this.name = name + "Table";
        }
        sit(): string {
            return `Sitting on a ${this.name}`;
        }
    }

    function clientRequest(factory: Furniture) {
        const chair = factory.createChair();
        const sofa = factory.createSofa();
        const table = factory.createTable();
        console.log(chair.sit());
        console.log(sofa.sit());
        console.log(table.sit());
    }

    console.log(clientRequest(new ModernFurniture()));
    console.log("");
    console.log(clientRequest(new VictorianFurniture()));
    console.log("");
}

//Step 1: Create a factory interface that creates Products
//Step 2: Create concrete factory classes that implements the factory interface
//Step 3: Create interface for each Product and functions that the product has 
//Step 4: Create concrete classes that implement each product (variants)
