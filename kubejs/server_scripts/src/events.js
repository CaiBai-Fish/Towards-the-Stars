// 世界加载完成时重载kjs
/*LevelEvents.loaded(e => {
    e.server.runCommand(`reload`)
})*/

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
        //GamePhase.addPhase(player, "nether")
    }
})

BlockEvents.leftClicked(e => {
    if (e.item.id == 'minecraft:shears' && e.block.id == 'minecraft:tripwire') {
        let pos = e.block.pos
        e.cancel()
        e.server.scheduleInTicks(2, () => {
            e.server.runCommandSilent(`setblock ${pos.x} ${pos.y} ${pos.z} minecraft:tripwire[disarmed=true]`)
        })
    }
})