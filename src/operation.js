function operation(exp) {
    
    let result;

    if (exp==='') {

        result=''

        return result
    }

    if (!(/[\+\x\%\-]/.test(exp))) {
        
        result=exp
        
        return result
    }
    
    if (!(/^\d+(\.\d+)?([\+\x\%\-]\d+(\.\d+)?)+$/.test(exp))) {
        result = 'SYNTAX ERROR'
        return result
    } else {

        let numbersList = exp.split(/[\+\x\%\-]/);

        let operatorsList = exp.split(/[^\+\x\%\-]+/);
        operatorsList.pop();
        operatorsList.shift()

        numbersList = numbersList.map(n=>parseFloat(n))

        //console.log(numbersList);
        //console.log(operatorsList)

        result=numbersList[0];

        for (let n=1;n<=numbersList.length;n++) {


            if (operatorsList[n-1]==='-') {
                result-=numbersList[n]
            } else if (operatorsList[n-1]==='+') {
                result+=numbersList[n]
            } else if (operatorsList[n-1]==='x') {
                result*=numbersList[n]
            } else if (operatorsList[n-1]==='%') {
                result/=numbersList[n]
            }

        }

    }

    if (result!==parseInt(result)) {
        result=result.toFixed(3)
    }

    if (result==='Infinity'||result==='NaN') {
        result='MATH ERROR'
    }
    

    return ''+result;
    
}

export {operation};