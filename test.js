const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
   let total = sum(14, 9);
   expect(total).toBe(23);
});

test('One euro should be 1.20 dollars', function(){
        const { fromEuroToDollar } = require('./app.js')
            expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test('One dollar should be 106.58 yenes', function(){
    const { fromDollarToYen } = require('./app.js')
        expect(fromDollarToYen(3.5)).toBe(373.03); //1 dollar son 106.58 yenes, entonces 3.5 dollares deberian ser = (3.5 * 106.58)
})

test('One Yen should be 0.006 pound', function(){
    const { fromYenToPound } = require('./app.js')
        expect(fromYenToPound(3.5)).toBe(0.021); //1 Yen son 0.006 pounds, entonces 3.5 yenes deberian ser = (3.5 * 0.006)
})