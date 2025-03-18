ServerEvents.recipes(event => {
    // 获取所有具有特定标签的物品
    let tagItems = Ingredient.of('#minecraft:logs').stacks;

    // 定义一个函数来生成对应的木板ID
    function getPlankId(logId) {
        // 获取物品的名称部分，例如 "oak_log" -> "oak_planks"
        let plankName = logId.split(':')[1].replace('_log', '').replace('_stem', '') + '_planks';
        return logId.split(':')[0] + ':' + plankName;
    }

    // 遍历标签中的所有物品
    tagItems.forEach(item => {
        let logId = item.id;
        let plankId = getPlankId(logId);

        // 检查生成的木板ID是否有效
        if (Item.exists(plankId)) {
            // 创建一个配方，将原木转换为相应的木板
            event.shapeless('6x ' + plankId, [logId, '#kubejs:saws']).damageIngredient('#kubejs:saws', 1);
        } else {
        }
    });
})