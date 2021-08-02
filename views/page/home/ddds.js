class Ddds {

    constructor(dddMatrix){
        this.dddMatrix = dddMatrix;
    }

    calculateWithFaleMais(origem, destination, minutes, pack){
        let result= 0;
        let surplusMinuts = minutes - pack;
        if (surplusMinuts >0 ) {
            for (const element of this.dddMatrix) {
                if (origem == element[0] && destination == element[1]) {
                    result = surplusMinuts * ( element[2] * 1.1 );
                }
            }
            return  result.toFixed(2);
        } else {
            return result.toFixed(2);
        }
    }

    calculateWithOutFaleMais(origem, destination, minutes){ 
        let result;
        for (const element of this.dddMatrix) {
            if (origem == element[0] && destination == element[1]) {
                result = minutes * element[2];
            }
        }
        return  result.toFixed(2);
    }

    hasCombinnation(origem, destination){
        let has = false;
        for (const element of this.dddMatrix) {
            if (origem == element[0] && destination == element[1]) {
                has = true;
            }
        }
        return has;
    }
    
    validateCombination(origem, destination){
        if (origem == destination) {
            return false;
        }
        return true;
    }

    validMinutes(minutes){
        if (minutes < 1) {
            return false;
        }
        return true;
    }
}

export default Ddds