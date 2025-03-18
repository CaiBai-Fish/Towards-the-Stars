ServerEvents.recipes(e => {
    e.shaped(Item.of('createaddition:electric_motor', 1), [
        'BBABB',
        'BCDCB',
        'BCDCB',
        'BBBBB'
    ], {
        A: 'create:andesite_alloy',
        B: 'create:brass_sheet',
        C: 'kubejs:magnet',
        D: 'kubejs:rotor'
    })
    e.shaped(Item.of('createaddition:alternator', 1), [
        'BBABB',
        'BCDCB',
        'BCDCB',
        'BBEBB'
    ], {
        A: 'create:andesite_alloy',
        B: 'create:iron_sheet',
        C: 'kubejs:magnet',
        D: 'kubejs:rotor',
        E: 'createaddition:capacitor'
    })
    e.shaped(Item.of('createaddition:modular_accumulator', 1), [
        'AAXAA',
        'ABBBA',
        'ABBBA',
        'ABBBA',
        'AAYAA'
    ], {
        A: '#kubejs:sheet/gold',
        B: 'createaddition:capacitor',
        X: 'createaddition:zinc_sheet',
        Y: 'create:copper_sheet'
    })
})