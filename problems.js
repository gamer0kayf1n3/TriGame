// https://stackoverflow.com/questions/17445231/js-how-to-find-the-greatest-common-divisor
function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {var temp = a; a = b; b = temp;}
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}

// deg to rad
function deg2rad(deg) {
    fac = gcd(deg, 180)
    var top = Math.floor(deg/fac)
    var bottom = Math.floor(180/fac)
    return `\\frac{${top}\\pi}{${bottom}}`
}
function randomDeg(neg_range, pos_range, precision=1) {
    return Math.round(((pos_range - neg_range + 1) * Math.random() + neg_range)/precision)*precision
}

function setQuestion(input) {
    convert("formula", input);
}

var current_type = "rad"