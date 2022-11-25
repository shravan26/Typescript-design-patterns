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
