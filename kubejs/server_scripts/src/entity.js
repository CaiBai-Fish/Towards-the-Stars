EntityJSEvents.addGoalSelectors('ctts:warped_golem', e => {
    // 加载Minecraft的Player类（用于后续检测玩家实体）
    let Player = Java.loadClass('net.minecraft.world.entity.player.Player')

    // 恐慌行为：优先级1，移动速度0.5
    // 触发条件：实体受伤或处于危险时，会随机逃窜
    //e.panic(1, 0.5)
    // 游泳漂浮行为：优先级1
    // 作用：实体在水中时会自动漂浮，不会下沉
    e.floatSwim(1)
    // 近战攻击行为：优先级4，移动速度1，是否忽视视野遮挡（true=忽视）
    // 作用：对目标发起近战攻击，优先级低于恐慌/游泳（数字越小优先级越高）
    e.meleeAttack(1, 0.5, true)
    // 跳跃扑向目标行为：优先级3，跳跃高度0.4
    // 作用：接近目标时会跳跃扑击，增强攻击威慑力
    e.leapAtTarget(3, 1.2)
    // 避水随机漫步：优先级5，移动速度0.4，漫步权重0.8
    // 作用：实体在陆地上随机移动，自动避开水域
    e.waterAvoidingRandomStroll(5, 0.4, 0.8)
    // 注视实体行为：优先级6，注视目标类（Player），最大注视距离8，注视速度0.8，是否只在视线内（false=可隔墙注视）
    // 作用：实体主动注视周围的玩家
    e.lookAtEntity(6, Player, 8, 0.8, true)
    // 随机环顾行为：优先级7
    // 作用：实体闲暇时随机转动头部，增加自然感
    e.randomLookAround(7)

    // 自定义目标：跟随玩家（自定义Goal的核心用法）
    e.customGoal(
        'follow_target', // 目标名称（用于标识，可自定义）
        1, // 优先级（1=最高，与恐慌行为同级）
        mob => true, // 目标激活条件：始终激活（返回true则执行）
        mob => true, // 目标持续条件：始终持续（返回true则保持执行）
        true, // 是否为持续性目标（true=执行中不会被低优先级目标打断）
        mob => { }, // 目标开始执行时的回调（此处无初始化逻辑）
        mob => mob.getNavigation().stop(), // 目标结束时的回调：停止导航（防止残留移动指令）
        true, // 是否需要实体可看见目标（true=需要视野，false=可隔墙追踪）
        /** 
         * 目标核心执行逻辑（每tick调用）
         * @param {Internal.Mob} mob - 当前实体对象
         */
        mob => {
            // 1. 获取实体碰撞箱，并扩大5格范围（检测更大范围内的实体）
            let mobAABB = mob.boundingBox.inflate(5)
            // 2. 遍历范围内所有实体
            mob.level.getEntitiesWithin(mobAABB).forEach(entity => {
                if (entity == null) return // 跳过空实体（防止空指针）
                // 3. 筛选条件：是玩家，且距离实体小于20格
                if (entity.player && entity.distanceToEntity(mob) < 20 && !entity.isCreative()) {
                    // 4. 让实体导航到玩家位置，移动速度1.0
                    mob.getNavigation().moveTo(entity.block.x, entity.y, entity.z, 0.5);
                }
            })
        }
    )
})

// 2. 旧版AI系统：补充实体的目标规则（Goal系统的扩展配置）
// 目标：添加攻击目标、繁殖目标等针对性行为
EntityJSEvents.addGoals('ctts:warped_golem', event => {
    // 加载Minecraft的牛实体类（作为攻击/互动目标）
    let Player = Java.loadClass('net.minecraft.world.entity.player.Player')

    // 受伤反击目标：优先级1
    // 参数：[复仇目标类]，是否连锁复仇（true=会帮同类复仇），[额外复仇目标类]
    // 作用：实体被牛攻击后，会反击所有牛类实体
    event.hurtByTarget(1, [Player], true, [Player])

    // 最近可攻击目标：优先级2
    // 参数：目标类（Player），搜索范围5，是否忽略视野（false=需看见），是否忽略_invulnerable（false=不攻击无敌目标），目标筛选器
    event.nearestAttackableTarget(2, Player, 8, false, false, () => {
        return true
    })

    // 再次移除恐慌目标（防止其他地方自动注册，确保实体不会恐慌）
    let $PanicGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.PanicGoal")
    event.removeGoal($PanicGoal)
    event.removeGoals(context => {
        const { goal, entity } = context
        return goal.getClass() == $PanicGoal
    })
})