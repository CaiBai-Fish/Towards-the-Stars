ServerEvents.recipes(e => {    
    e.recipes.create.sequenced_assembly(Item.of('40x tacz:ammo', '{AmmoId:"tacz:9mm"}'),
        'create:copper_sheet',
        [
            e.recipes.create.pressing('create:copper_sheet', 'create:copper_sheet'),
            e.recipes.create.deploying('create:copper_sheet', ['create:copper_sheet', 'minecraft:gunpowder']),
            e.recipes.create.pressing('create:copper_sheet', 'create:copper_sheet'),
            e.recipes.create.deploying('create:copper_sheet', ['create:copper_sheet', 'create:copper_sheet']),
            e.recipes.create.pressing('create:copper_sheet', 'create:copper_sheet')
        ]
    ).loops(1).transitionalItem('create:copper_sheet')
})