StartupEvents.registry('creative_mode_tab', e => {
	e.create('ctts:potion').icon(() => 'minecraft:potion').content(() => [
		Item.of('ctts:bottle', { tier: 'naga', CustomModelData: 1, display: { Name: JSON.stringify({ translate: 'item.ctts.bottle.naga', italic: false }) } }),
		Item.of('ctts:bottle', { tier: 'lich', CustomModelData: 2, display: { Name: JSON.stringify({ translate: 'item.ctts.bottle.lich', italic: false }) } }),
		Item.of('ctts:bottle', { tier: 'minoshroom', CustomModelData: 3, display: { Name: JSON.stringify({ translate: 'item.ctts.bottle.minoshroom', italic: false }) } }),
		Item.of('ctts:bottle', { tier: 'knight_phantom', CustomModelData: 4, display: { Name: JSON.stringify({ translate: 'item.ctts.bottle.knight_phantom', italic: false }) } }),
		Item.of('ctts:bottle', { tier: 'alpha_yeti', CustomModelData: 5, display: { Name: JSON.stringify({ translate: 'item.ctts.bottle.alpha_yeti', italic: false }) } }),
		Item.of('ctts:bottle', { tier: 'ur_ghast', CustomModelData: 6, display: { Name: JSON.stringify({ translate: 'item.ctts.bottle.ur_ghast', italic: false }) } }),
		Item.of('ctts:bottle', { tier: 'snow_queen', CustomModelData: 7, display: { Name: JSON.stringify({ translate: 'item.ctts.bottle.snow_queen', italic: false }) } }),
		Item.of('ctts:bottle', { tier: 'warden', CustomModelData: 8, display: { Name: JSON.stringify({ translate: 'item.ctts.bottle.warden', italic: false }) } }),
		Item.of('ctts:bottle', { tier: 'wither', CustomModelData: 9, display: { Name: JSON.stringify({ translate: 'item.ctts.bottle.wither', italic: false }) } })
	])
})