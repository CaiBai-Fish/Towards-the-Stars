BlockEvents.rightClicked('supplementaries:pedestal', e => {
    // 获取玩家、物品和方块信息
    let player = e.player
    let item = e.item
    let block = e.block
    let level = e.level
    let server = e.server
    // 检查展示台上是否有ctts:nether_book
    if (item.id == 'ctts:nether_book' && block.id == 'supplementaries:pedestal' && !GamePhase.hasPhase(player, "nether")) {
        let pos = e.block.pos

        // 触发粒子效果
        let duration = 100 // 5秒
        let interval = 3 // 每 2 tick 刷新一次
        let radius = 3 // 法阵固定半径

        for (let t = 0; t < duration; t += interval) {
            server.scheduleInTicks(t, () => {
                for (let i = 0; i < 360; i += 3) {
                    for (let j = 0; j < 3; j++) {
                        let radians = i * (3.14 / 180);
                        let xOffset = Math.cos(radians) * radius
                        let zOffset = Math.sin(radians) * radius

                        // 血红色粒子
                        level.spawnParticles("minecraft:dust 1 0 0 0.5",
                            true,
                            pos.x + 0.5 + xOffset, pos.y + 1, pos.z + 0.5 + zOffset,
                            0, 0, 0,
                            5, 0.01
                        )
                    }
                    let innerRadians = (i + 8) * (3.14 / 180)
                    let innerX = Math.cos(innerRadians) * radius * 0.4
                    let innerZ = Math.sin(innerRadians) * radius * 0.4

                    // 小环
                    level.spawnParticles('minecraft:dust 1 0 0 0.3',
                        true,
                        pos.x + 0.5 + innerX, pos.y + 1, pos.z + 0.5 + innerZ,
                        0, 0, 0,
                        5, 0.01
                    )
                }

            })
            server.scheduleInTicks(duration, () => {
                level.destroyBlock(pos, false)
            })
        }

        // 给予玩家阶段
        GamePhase.addPhase(player, "nether")
    }
})

// 回退刷线机修复
BlockEvents.leftClicked(e => {
    if (e.item.id == 'minecraft:shears' && e.block.id == 'minecraft:tripwire') {
        let pos = e.block.pos
        e.cancel()
        e.server.scheduleInTicks(2, () => {
            e.server.runCommandSilent(`setblock ${pos.x} ${pos.y} ${pos.z} minecraft:tripwire[disarmed=true]`)
        })
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
    if (source.type().msgId() !== 'indirectMagic') return
    let srcpos = source.sourcePosition
    if (!srcpos) return
    const cloud = level.getEntitiesWithin(AABB.of(srcpos.x() - 1, srcpos.y() - 1, srcpos.z() - 1, srcpos.x() + 1, srcpos.y() + 1, srcpos.z() + 1))
    cloud.forEach(ent => {
        if (ent.type == "minecraft:area_effect_cloud" && entity.hasEffect("ctts:dragon_breath_resistance")) {
            e.cancel()
        }
    })
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
    if (entity.tags !== '[UnProtected]') {
        e.cancel(0)
    } else {
        if (entity_type !== 'minecraft:player') {
            e.cancel()
        }
    }
})
// 破防标签转移
ServerEvents.tick(e => {
    e.server.entities.forEach(entity => {
        if (entity.type !== 'ctts:bottle') return
        const tag = entity.nbt.get('Item').get('tag')
        const tier = tag.get('tier').toString()
        entity.addTag(tier)
        tag.remove('tier')
    })
})

// 暮色最终BOSS生成
const final = [
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
})