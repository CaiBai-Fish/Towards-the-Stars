ServerEvents.recipes(e => {
    e.recipes.createMechanicalExtruderExtruding('minecraft:andesite',['minecraft:water','minecraft:lava']).withCatalyst('kubejs:compressed_andesite')
    e.recipes.createMechanicalExtruderExtruding('minecraft:granite',['minecraft:water','minecraft:lava']).withCatalyst('kubejs:compressed_granite')
    e.recipes.createMechanicalExtruderExtruding('minecraft:diorite',['minecraft:water','minecraft:lava']).withCatalyst('kubejs:compressed_diorite')
    e.recipes.createMechanicalExtruderExtruding('minecraft:tuff',['minecraft:water','minecraft:lava']).withCatalyst('kubejs:compressed_tuff')
    e.recipes.createMechanicalExtruderExtruding('minecraft:calcite',['minecraft:water','minecraft:lava']).withCatalyst('kubejs:compressed_calcite')
})