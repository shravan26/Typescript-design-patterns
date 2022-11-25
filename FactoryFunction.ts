abstract class LogisticService {
    public abstract createTransport(): Transport;

    public logisticStrategy(): string {
        const transport = this.createTransport();

        return `Logistic strategy is ${transport.deliver()}`;
    }
}

class RoadLogistics extends LogisticService {
    public createTransport(): Transport {
        return new Truck();
    }
}

class SeaLogistics extends LogisticService {
    public createTransport(): Transport{
        return new Ship();  
    }
}

interface Transport {
    deliver(): string;
}

class Truck implements Transport {
    public deliver(): string {
        return `delivery through road`;
    }
}

class Ship implements Transport {
    public deliver(): string {
        return `delivery through sea`;
    }
}

function clientRequest(creator: LogisticService) {
    console.log("Runs without LogisticService awareness");
    console.log(creator.logisticStrategy());
}

console.log("App launched with concrete creator 1");
clientRequest(new RoadLogistics());
console.log("");

console.log("App launched with concrete creator 2");
clientRequest(new SeaLogistics());
console.log("");

//Step 1: Create the interface, which is the return type of the factory function that produces the products. The interface should have functionality that is common to the products.
//Step 2: Create the product classes that implement the interface and return the implementation of then functions that are inherited from the interface.
//Step 3: Create the Creator class that has the factort function that returns the products and along with some business logic associated with the product.
//Step 4: Create the Concrete Classes that inherit from the Creator and return the products by implementing the factory function. 
//Step 5: Create seperate implementations with each class to test them out.