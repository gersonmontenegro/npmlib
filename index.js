const f = function(n) {
    if (n < 2){
        return n;
    }
    return f(n - 1) + f(n - 2);
}

exports.getFibonacci = f;