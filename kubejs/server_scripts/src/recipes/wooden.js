ServerEvents.recipes(event => {
    let tagItems = Ingredient.of('#minecraft:logs').stacks;

    function getPlankId(logId) {
        let plankName = logId.split(':')[1].replace('_log', '').replace('_stem', '') + '_planks';
        return logId.split(':')[0] + ':' + plankName;
    }

    tagItems.forEach(item => {
        let logId = item.id;
        let plankId = getPlankId(logId);

        if (Item.exists(plankId)) {
            event.shapeless('6x ' + plankId, [logId, '#ctts:saws']).damageIngredient('#ctts:saws', 1);
        } else {
        }
    });
})