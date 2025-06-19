ServerEvents.recipes(e => {
    e.recipes.create.milling('2x ae2:sky_dust', 'ae2:sky_dust')
    e.recipes.create.splashing(Item.of('ae2:sky_dust').withChance(0.4), 'minecraft:grass_block')
})