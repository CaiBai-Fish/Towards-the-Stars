Platform.mods.kubejs.name = 'Ctts'
StartupEvents.registry('creative_mode_tab', e => {
    e.create('ctts:potion').icon(() => 'ctts:bottle').content(() => [
        Item.of('ctts:bottle', { custom_data: { tier: 'naga' }, custom_model_data: 1, custom_name: { translate: 'item.ctts.bottle.naga', italic: false } }),
        Item.of('ctts:bottle', { custom_data: { tier: 'lich' }, custom_model_data: 2, custom_name: { translate: 'item.ctts.bottle.lich', italic: false } }),
        Item.of('ctts:bottle', { custom_data: { tier: 'minoshroom' }, custom_model_data: 3, custom_name: { translate: 'item.ctts.bottle.minoshroom', italic: false } }),
        Item.of('ctts:bottle', { custom_data: { tier: 'knight_phantom' }, custom_model_data: 4, custom_name: { translate: 'item.ctts.bottle.knight_phantom', italic: false } }),
        Item.of('ctts:bottle', { custom_data: { tier: 'alpha_yeti' }, custom_model_data: 5, custom_name: { translate: 'item.ctts.bottle.alpha_yeti', italic: false } }),
        Item.of('ctts:bottle', { custom_data: { tier: 'ur_ghast' }, custom_model_data: 6, custom_name: { translate: 'item.ctts.bottle.ur_ghast', italic: false } }),
        Item.of('ctts:bottle', { custom_data: { tier: 'snow_queen' }, custom_model_data: 7, custom_name: { translate: 'item.ctts.bottle.snow_queen', italic: false } }),
        Item.of('ctts:bottle', { custom_data: { tier: 'warden' }, custom_model_data: 8, custom_name: { translate: 'item.ctts.bottle.warden', italic: false } }),
        Item.of('ctts:bottle', { custom_data: { tier: 'wither' }, custom_model_data: 9, custom_name: { translate: 'item.ctts.bottle.wither', italic: false } })
    ])
})