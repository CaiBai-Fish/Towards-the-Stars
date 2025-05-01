BlockEvents.rightClicked('supplementaries:pedestal', e => {
    // 获取玩家、物品和方块信息
    let player = e.player
    let item = e.item
    let block = e.block
    let level = e.level
    let server = e.server
    // 检查展示台上是否有kubejs:nether_book
    if (item.id == 'kubejs:nether_book' && block.id == 'supplementaries:pedestal' && !GamePhase.hasPhase(player, "nether")) {
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

// 特殊岩浆块伤害机制
const cooldown = {
    time: 0,
    interval: 10
}
// 检测实体是否穿有冰霜行者靴子
function detectboots(entity) {
    // 获取实体的盔甲槽位
    const boots = entity.getArmorSlots()[0]
    // 返回冰霜行者靴子的附魔等级
    return boots.getEnchantmentLevel('minecraft:frost_walker')
}
ServerEvents.tick(event => {
    const server = event.server

    // 冷却计数
    if (cooldown.time > 0) {
        cooldown.time--
        return
    }

    // 冷却完毕，执行检测逻辑
    cooldown.time = cooldown.interval // 重置冷却
    // 遍历所有生物实体
    server.entities.forEach(entity => {
        if (!entity.isLiving()) return

        const pos = entity.blockPosition().below()
        const block = entity.level.getBlock(pos)

        if (block.id === 'kubejs:magma_block_pro' && !detectboots(entity)) {
            server.runCommandSilent(`damage ${entity.uuid} 3 minecraft:hot_floor_pro`)
        }
    })
})

// 注册流体的烫伤
ServerEvents.tick(e => {
    const server = e.server
    // 冷却计数
    if (cooldown.time > 0) {
        cooldown.time--
        return
    }
    // 遍历所有实体
    server.entities.forEach(entity => {
        let pos = entity.blockPosition()
        const fluidid = entity.level.getBlock(pos).id
        if (fluidid.includes('kubejs:melted_'))
            entity.lavaHurt()
    })
})