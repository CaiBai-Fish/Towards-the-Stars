ServerEvents.tags('item', event => {
    event.add('kubejs:saws', ['kubejs:stone_saw', 'kubejs:iron_saw', 'kubejs:diamond_saw', 'kubejs:netherite_saw'])
    event.add('kubejs:saws/iron', ['kubejs:iron_saw', 'kubejs:diamond_saw', 'kubejs:netherite_saw'])
    event.add('kubejs:saws/diamond', ['kubejs:diamond_saw', 'kubejs:netherite_saw'])
    event.add('kubejs:saws/netherite', 'kubejs:netherite_saw')
    let tools = (tem, mod) => {
        let id = mod + ':diamond_' + tem
        event.add('forge:tools/diamond', id)
        //id + '_pickaxe', id + '_axe', id + '_hoe', id + '_shovel', id + '_wand'
    }
    tools('pickaxe', 'minecraft')
    tools('axe', 'minecraft')
    tools('hoe', 'minecraft')
    tools('shovel', 'minecraft')
    tools('wand', 'constructionwand')
    event.add('kubejs:stones', ['minecraft:granite', 'minecraft:diorite', 'minecraft:calcite', 'minecraft:tuff'])
    event.add('kubejs:sheet/gold', ['create:golden_sheet', 'createaddition:electrum_sheet'])
    //将去皮原木剔除
    let tagItems = Ingredient.of('#minecraft:logs').stacks;
    function getLogId(logId) {
        let logName = logId.split(':')[1].replace('stripped_', '');
        return logId.split(':')[0] + ':' + logName;
    }
    tagItems.forEach(item => {
        let logId = item.id;
        let logsId = getLogId(logId);
        if (Item.exists(logsId)) {
            event.add('kubejs:logs', [logsId]);
        }
    });
    event.add('kubejs:powder', ['create:wheat_flour', 'farmersdelight:rice'])
})