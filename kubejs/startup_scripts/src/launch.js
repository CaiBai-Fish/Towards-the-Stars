Platform.mods.kubejs.name = 'Infinite'
StartupEvents.registry('item',event=>{
	// 工具
	let registerSaw = (materialId, materialName, durability) => {
		let id = materialId.toLowerCase() + '_saw'

		event.create(id)
			.texture('infinite:item/tool/' + id)
			.displayName(materialName + '手锯')
			.maxDamage(durability)
	}
	registerSaw('Stone', '石', 131)
	registerSaw('Iron', '铁', 250)
	registerSaw('Diamond', '钻石', 1561)
	registerSaw('Netherite', '下界合金', 2031)
	//模板
	let template = (templateName, name) => {
		let id = templateName.toLowerCase() + '_template'
		event.create(id)
			.displayName(name + '模板')
			.texture('infinite:item/template/' + id)
	}
	template('Base', '基础')
	template('Diamond', '钻石')

	//杂项
	let outer_wall = (tierId, tierName) => {
		let id = tierId + '_rocket_outerwall'
		event.create(id)
			.displayName(tierName + '火箭外壳')
			.texture('infinite:item/' + id)
	}
	outer_wall('tier_1', '一阶')
	outer_wall('tier_2', '二阶')
	outer_wall('tier_3', '三阶')
	outer_wall('tier_4', '四阶')
	let frame = (tierId, tierName) => {
		let id = tierId + '_rocket_frame'
		event.create(id)
			.displayName(tierName + '火箭框架')
			.texture('infinite:item/' + id)
	}
	frame('tier_1', '一阶')
	frame('tier_2', '二阶')
	frame('tier_3', '三阶')
	frame('tier_4', '四阶')

	let items = (itemId, itemName, durability) => {
		if (durability == null){
			durability = 0
		}
		event.create(itemId)
			.displayName(itemName)
			.texture('infinite:item/' + itemId)
			.maxDamage(durability)
	}
	items('stone_rod', '石棍')
	items('screwdriver', '螺丝刀', 251)
	items('drill_head', '钻头')
	items('saw_blade', '锯片')
	items('plough', '犁')
	items('harvester', '收割器')
	items('rotor', '转子')
	items('magnet', '磁铁')
	items('diamond_nugget', '钻石粒')
	items('extinguished_blaze_rod', '熄灭的烈焰棒')
	
	event.create('incomplete_heart_of_the_deep', 'create:sequenced_assembly')
		.displayName('深暗之心（未完成）')
		.texture('infinite:item/incomplete_heart_of_the_deep')
		.maxStackSize(1)

	event.create('gun_book')
		.displayName('枪械指南')
		.tooltip('制作中')
		.rarity('uncommon')
		.texture('infinite:item/book_cyan')
	event.create('twilight_key').displayName('暮色钥匙').texture('infinite:item/twilight_key')
	event.create('key_fragments').displayName('钥匙碎片').texture('infinite:item/key_fragments')

})
StartupEvents.registry('block',event=>{
	//机壳
	let casing = (casingId, casingName) => {
		let id = casingId.toLowerCase() + '_casing'
		event.create(id)
			.displayName(casingName + '机壳')
			.material('metal')
			.textureAll('infinite:block/' + id)
	}
	casing('Steel', '钢')
	casing('Desh', '戴斯')
	casing('Ostrum', '紫金')
	casing('Calorite', '耐热')

	let stone = (stoneId, stoneName) => {
		let id = 'compressed_' + stoneId
		event.create(id)
			.textureAll('infinite:block/compressed/' + id)
			.displayName('压缩' + stoneName)
			.hardness(1.5)
			.tagBlock('kubejs:compressed_stones')
			.material('stone')
	}
	stone('andesite', '安山岩')
	stone('granite', '花岗岩')
	stone('diorite', '闪长岩')
	stone('tuff', '凝灰岩')
	stone('calcite', '方解石')
	stone('limestone', '石灰岩')

	let block = (blockId, blockName, hardness) => {
		let id = blockId.toLowerCase()
		event.create(id)
			.textureAll('infinite:block/' + id)
			.displayName(blockName)
			.hardness(hardness)
	}
	block('Control_Core', '控制核心', 50)
})