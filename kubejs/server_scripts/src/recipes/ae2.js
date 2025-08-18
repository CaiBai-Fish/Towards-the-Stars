ServerEvents.recipes(e => {
    e.recipes.create.milling('2x ae2:sky_dust', 'ae2:sky_dust')
    e.recipes.create.splashing(Item.of('ae2:sky_dust').withChance(0.4), 'minecraft:grass_block')
    e.recipes.create.splashing([Item.of('ae2:ender_dust').withChance(0.4), Item.of('minecraft:blaze_powder').withChance(0.1)], 'minecraft:warped_wart_block')
    e.recipes.create.filling('minecraft:ender_pearl', [Fluid.of('minecraft:lava', 400), 'ae2:ender_dust'])
})