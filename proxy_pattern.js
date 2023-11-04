//proxy pattern
// it allows to use one object (proxy) as placeholder for another object.proxy can access control to that object

function cryptoapi() {
    this.getValue = function(coin) {
        console.log("calling external api")
        switch (coin) {
            case "bitcoin":
                return "$1000"
            case "ethereum":
                return "$200"
            case "litcoin":
                return "$500"
        }
    }
}

function cryptoProxy() {
    this.api = new cryptoapi()
    this.cache = {}
    this.getValue = function(coin) {
        if (this.cache[coin] == null) {
            this.cache[coin] = this.api.getValue(coin)
        }
        return this.cache[coin]
    }
}

const proxy = new cryptoProxy()

console.log(proxy.getValue("bitcoin"))
console.log(proxy.getValue("ethereum"))