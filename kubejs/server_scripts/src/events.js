BlockEvents.rightClicked('supplementaries:pedestal', e => {
    // 获取玩家、物品和方块信息
    const { player, block, level, server } = e
    const item = player.mainHandItem
    let pos = block.pos
    // 触发粒子效果
    const radius = 5
    const particle = 'reverse_portal'//"minecraft:dust 1 0 0 1"
    function circle1(start, stop) {
        let i = start
        server.scheduleRepeatingInTicks(1, () => {
            if (i >= stop)
                return
            for (let n = 8; n > 0; n--) {
                let j = -i
                let innerRadians = (j + n * 2) * (3.14 / 180)
                let innerRadius = radius * (i / 3600) ** 2
                if (innerRadius >= 3)
                    innerRadius = 3
                let innerX = Math.cos(innerRadians) * innerRadius
                let innerZ = Math.sin(innerRadians) * innerRadius

                // 小环
                level.spawnParticles(particle,
                    true,
                    pos.x + 0.5 + innerX, pos.y + 1.5, pos.z + 0.5 + innerZ,
                    0, 0, 0,
                    4, 0.01
                )
            }
            i += 8
        })
    }
    function circle2(up, start, stop) {
        let i = start
        server.scheduleRepeatingInTicks(1, () => {
            if (i >= stop)
                return
            for (let n = 0; n < 10; n++) { // 每tick生成5个粒子
                let radians = (i + n * 2) * (3.14 / 180)
                let xOffset = Math.cos(radians) * radius
                let zOffset = Math.sin(radians) * radius
                let rise = i / up
                if (rise > 1.5)
                    rise = 1.5

                level.spawnParticles(particle,
                    true,
                    pos.x + 0.5 + xOffset, pos.y + rise, pos.z + 0.5 + zOffset,
                    0, 0, 0,
                    5, 0.06
                )
            }
            i += 10
        })
    }
    if (item.id == 'ctts:nether_book' && !GamePhase.hasPhase(player, 'nether')) {
        circle1(240, 1680)
        server.scheduleInTicks(30, () => { circle2(680, 60, 1500) })
        server.scheduleInTicks(80, () => { server.runCommandSilent(`setblock ${pos.x} ${pos.y} ${pos.z} supplementaries:pedestal`) })
        server.scheduleInTicks(360, () => { GamePhase.addPhase(player, 'nether'); player.tell('你现在可以去下界了！') })
    }
})

const whitelist_entity = [
    'ctts:warped_golem',
    'minecraft:magma_cube'
]
function detectboots(entity) {
    // 获取实体的盔甲槽位
    const boots = entity.getArmorSlots()[0]
    // 返回冰霜行者靴子的附魔等级
    return boots.getEnchantmentLevel('minecraft:frost_walker')
}

ServerEvents.tick(e => {
    const server = e.server
    server.entities.forEach(entity => {
        if (!entity.isLiving() && entity.age % 20 != 0) return
        let pos = entity.blockPosition()

        // 注册流体的烫伤
        const fluid_id = 'ctts:melted_'
        const fluidid = entity.level.getBlock(pos).id
        if (fluidid.includes(fluid_id) && !whitelist_entity.includes(entity.type)) {
            entity.lavaHurt()
        }

        // 强化岩浆块烫伤
        const posb = entity.blockPosition().below()
        const block = entity.level.getBlock(posb)
        if (block.id === 'ctts:magma_block_pro' && !detectboots(entity) && !whitelist_entity.includes(entity.type)) {
            server.runCommandSilent(`damage ${entity.uuid} 3 minecraft:hot_floor_pro`)
        }
    })
})
EntityEvents.hurt(e => {
    const { entity, player, server, level, source } = e
    if (!entity.isLiving()) return
    if (player && player.isCreative()) return

    // 抗龙息药水效果
    if ((source.getType() == 'indirectMagic')
        && (source.getImmediate().type == 'minecraft:area_effect_cloud')
        && entity.hasEffect("ctts:dragon_breath_resistance")
    ) e.cancel()
    return
})
// Boss破防机制
EntityEvents.hurt([
    "twilightforest:naga",
    "twilightforest:lich",
    "twilightforest:minoshroom",
    "twilightforest:knight_phantom",
    "twilightforest:alpha_yeti",
    "twilightforest:ur_ghast",
    "twilightforest:snow_queen",
    "minecraft:warden",
    "minecraft:wither"
], e => {
    const { entity, player, server, level, source } = e
    // Boss抗性
    const entity_type = source.getActual().entityJs$getTypeId()
    if (player.isCreative()) return
    if (entity.tags !== '[UnProtected]') {
        e.cancel(0)
    } else {
        if (entity_type !== 'minecraft:player') {
            e.cancel()
        }
    }
})
// 破防标签转移
EntityEvents.spawned('ctts:bottle', e => {
    const entity = e.entity
    const tag = entity.nbt.get('Item').get('tag')
    if (!tag || !tag.contains('tier')) return

    const tier = tag.get('tier').toString()
    entity.addTag(tier)
    tag.remove('tier')
})
// 暮色最终BOSS生成
/*const final = [
    '{"text":"Final Castle WIP."}',
    '{"text":"Join our Discord server to"}',
    '{"text":"follow development of the mod:"}',
    '{"text":"discord.experiment115.com"}'
]
ServerEvents.tick(e => {
    e.server.entities.forEach(f => {
        if (f.type == "minecraft:armor_stand") {
            const name = f.nbt.get('CustomName')
            if (name && final.indexOf(name)) {
                //f.discard()
                let pos = f.blockPosition()
                if (final.indexOf(name) == 3) {
                    //e.server.runCommandSilent(`summon ctts:final_boss ${pos.x} ${pos.y} ${pos.z}`)
                    console.log(true)
                }
            }
        }
    })
})*/