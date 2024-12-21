Platform.mods.kubejs.name = 'Towards the Stars'
StartupEvents.registry('item',event=>{
	//构件
	let mechanism = (meName) => {
		let id = meName.toLowerCase() + '_mechanism'
		event.create(id).rarity('rare')
	}
	mechanism('nether')
	mechanism('end')
	let inc = (incName) => {
		let id = 'incomplete_' + incName.toLowerCase() + '_mechanism'
		event.create(id, 'create:sequenced_assembly').rarity('rare')
	}
	inc('nether')
	inc('end')
	// 工具
	let registerSaw = (materialId, durability) => {
		let id = materialId.toLowerCase() + '_saw'
		event.create(id)
			.maxDamage(durability)
	}
	registerSaw('Stone', 131)
	registerSaw('Iron', 250)
	registerSaw('Diamond', 1561)
	registerSaw('Netherite', 2031)
	//模板
	let template = (templateName) => {
		let id = templateName.toLowerCase() + '_template'
		event.create(id)
	}
	template('Base')
	template('Diamond')

	//火箭
	let outer_wall = (tierId) => {
		let id = tierId + '_rocket_outerwall'
		event.create(id)
	}
	outer_wall('tier_1')
	outer_wall('tier_2')
	outer_wall('tier_3')
	outer_wall('tier_4')
	let frame = (tierId) => {
		let id = tierId + '_rocket_frame'
		event.create(id)
	}
	frame('tier_1')
	frame('tier_2')
	frame('tier_3')
	frame('tier_4')

	//杂项
	let items = (itemId, durability) => {
		if (durability == null){
			durability = 0
		}
		event.create(itemId)
			.maxDamage(durability)
	}
	items('stone_rod')
	items('screwdriver', 251)
	items('drill_head')
	items('saw_blade')
	items('plough')
	items('harvester')
	items('rotor')
	items('magnet')
	items('diamond_nugget')
	items('extinguished_blaze_rod')
	
	event.create('incomplete_heart_of_the_deep', 'create:sequenced_assembly')
		.maxStackSize(1)

	event.create('gun_book')
		.tooltip('制作中')
		.rarity('uncommon')
	event.create('twilight_key').rarity('rare')
	event.create('key_fragments')
	event.create('nether_book').rarity('rare')

})

StartupEvents.registry('block',event=>{
	//机壳
	let casing = (casingId) => {
		let id = casingId.toLowerCase() + '_casing'
		event.create(id)
			.material('metal')
	}
	casing('Steel')
	casing('Desh')
	casing('Ostrum')
	casing('Calorite')

	let stone = (stoneId) => {
		let id = 'compressed_' + stoneId
		event.create(id)
			.hardness(1.5)
			.tagBlock('kubejs:compressed_stones')
			.material('stone')
	}
	stone('andesite')
	stone('granite')
	stone('diorite')
	stone('tuff')
	stone('calcite')
	stone('limestone')

	let block = (blockId, hardness) => {
		let id = blockId.toLowerCase()
		event.create(id)
			.hardness(hardness)
	}
	block('Control_Core', 50)
})