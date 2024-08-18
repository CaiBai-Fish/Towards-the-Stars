ServerEvents.recipes(e => {
    //压缩岩石
    let stones = (stoneId, mod) => {
        let id = 'kubejs:compressed_' + stoneId
        let ids = mod + ':' + stoneId
            e.recipes.create.sequenced_assembly(Item.of(id, 1), ids,
            [
                e.recipes.create.deploying(ids, [ids, ids]),
                e.recipes.create.pressing(ids, ids)
            ]).loops(127)
                .transitionalItem(ids)
    }
    stones('andesite', 'minecraft')
    stones('granite', 'minecraft')
    stones('diorite', 'minecraft')
    stones('tuff', 'minecraft')
    stones('calcite', 'minecraft')
    stones('limestone', 'create')
})