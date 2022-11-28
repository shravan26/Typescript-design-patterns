namespace BuilderPattern {
    enum BackSupportType {
        ERGONOMIC = "Ergonomic",
        MESH = "Mesh",
        NONE = "no",
        //Add more if necessary, but you get the point
    }
    enum MaterialType {
        WOOD = "Wooden",
        PLASTIC = "Plastic",
        STONE = "Stone",
    }
    interface FurnitureBuilder {
        reset(): void;
        setLegs(legs: number): string;
        setTop(type: string): string;
        setMaterial(type: MaterialType): string;
        setBackSupport(type: BackSupportType): string;
    }

    class ChairBuilder implements FurnitureBuilder {
        private product: Chair;
        constructor() {
            this.reset();
        }
        public reset() {
            this.product = new Chair();
        }
        public setLegs(legs: number): string {
            this.product.parts.push(`This chair has ${legs} legs`);
            return `This chair has ${legs} legs`;
        }
        public setTop(type: string): string {
            this.product.parts.push(`This chair has ${type} top`);
            return `This chair has ${type} top`;
        }
        public setBackSupport(type: BackSupportType): string {
            this.product.parts.push(`This chair has ${type} back support`);
            return `This chair has ${type} back support`;
        }
        public setMaterial(type: MaterialType): string {
            this.product.parts.push(`This chair is made of ${type}`);
            return `This chair is made of ${type}`;
        }
        public getProduct(): Chair {
            const result = this.product;
            this.reset();
            return result;
        }
    }

    class TableBuilder implements FurnitureBuilder {
        private product: Table;
        constructor() {
            this.reset();
        }
        public reset() {
            this.product = new Table();
        }
        public setLegs(legs: number): string {
            this.product.parts.push(`This table has ${legs} legs`);
            return `This table has ${legs} legs`;
        }
        public setTop(type: string): string {
            this.product.parts.push(`This table has ${type} top`);
            return `This table has ${type} top`;
        }
        public setBackSupport(type: BackSupportType): string {
            this.product.parts.push(`This table has ${type} back support`);
            return `This table has ${type} back support`;
        }
        public setMaterial(type: MaterialType): string {
            this.product.parts.push(`This table is made of ${type}`);
            return `This table is made of ${type}`;
        }
        public getProduct(): Table {
            const result = this.product;
            this.reset();
            return result;
        }
    }

    class ProductDescription {
        public parts: string[] = [];

        public listParts(): void {
           console.log( `Product parts: ${this.parts.join(', ')} \n`);
        }
    }
    class Chair extends ProductDescription {
        constructor() {
            super();
        }
    }
    class Table extends ProductDescription {
        constructor() {
            super();
        }
    }
    class Director {
        private builder: FurnitureBuilder;

        public setBuilder(builder: FurnitureBuilder) {
            this.builder = builder;
        }

        public buildAChair(): void {
            this.builder.setLegs(4);
            this.builder.setTop("Rectangle");
            this.builder.setMaterial(MaterialType.WOOD);
            this.builder.setBackSupport(BackSupportType.ERGONOMIC);
        }
        public buildATable(): void {
            this.builder.setLegs(1);
            this.builder.setTop("Circle");
            this.builder.setMaterial(MaterialType.STONE);
            this.builder.setBackSupport(BackSupportType.NONE);
        }
    }

    function clientRequest(director: Director, type: string) {
        const chairBuilder = new ChairBuilder();
        const tableBuilder = new TableBuilder();
        if(type == 'Chair') {
            director.setBuilder(chairBuilder);
            console.log("Creating a Chair: ");
            director.buildAChair();
            chairBuilder.getProduct().listParts();
        }
        if(type == 'Table') {
            director.setBuilder(tableBuilder);
            console.log("Creating a Table: ");
            director.buildATable();
            tableBuilder.getProduct().listParts();
        }
    }
    
    const director = new Director();
    clientRequest(director, "Chair");
    clientRequest(director, "Table");
}

//Step 1: Create a common interface that has a step by step way to create the product
//Step 2: Implement the interface from step 1 and create all the builder classes and override the function specification
//Step 3: Create the products that are to be built by the builder.
//Step 4: Create a director(optional) and specify the builder functions to build the product and pass corresponding builder.

