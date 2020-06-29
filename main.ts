enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Gap = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gap, function (sprite, otherSprite) {
    if (otherSprite.right - sprite.left < 2) {
        info.changeScoreBy(69)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
    animation.setAction(mySprite, ActionKind.Jumping)
})
let projectile: Sprite = null
let gapSprite: Sprite = null
let gapImage: Image = null
let bottomImage: Image = null
let topImage: Image = null
let gap = 0
let mySprite: Sprite = null
scene.setBackgroundColor(9)
info.setScore(0)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 2 1 2 5 2 1 2 . .
    . . . . b 5 5 1 2 1 5 1 2 1 . .
    . . . . b 5 5 2 1 2 d 2 1 2 . .
    b . . . b b d 5 5 5 4 4 4 4 4 b
    b b . 5 5 5 b 5 5 4 4 4 4 4 b .
    b d c 5 5 5 5 d 5 5 5 5 5 b . .
    c d d c d 5 5 b 5 5 5 5 5 5 b .
    c b d d c c b 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, SpriteKind.Player)
mySprite.ay = 300
let anim = animation.createAnimation(ActionKind.Jumping, 25)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . b 5 5 b . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . b b b b b 5 5 5 5 5 5 5 b . .
    . b d 5 b 5 5 5 5 5 5 5 5 b . .
    . . b 5 5 b 5 1 1 1 5 1 1 1 . .
    . . b 5 5 5 5 1 f 1 5 1 f 1 . .
    b b d b 5 5 5 1 1 1 4 1 1 1 b .
    b d d c d 5 5 b 5 4 4 4 4 4 4 b
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . b b b b b 5 5 5 5 5 5 5 b . .
    . b d 5 b 5 5 5 5 5 5 5 5 b . .
    . . b 5 5 b 5 1 1 1 5 1 1 1 . .
    . . b d 5 5 b 1 f 1 5 1 f 1 . .
    b b d b 5 5 5 1 1 1 4 1 1 1 4 b
    b d d c d 5 5 b 5 4 4 4 4 4 b .
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`)
anim.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . . . . b c . . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 1 1 1 5 1 1 1 . .
    . . . . b 5 5 1 f 1 5 1 f 1 . .
    . . . . b 5 5 1 1 1 d 1 1 1 . .
    b d d d b b d 5 5 5 4 4 4 4 4 b
    b b d 5 5 5 b 5 5 4 4 4 4 4 b .
    b d c 5 5 5 5 d 5 5 5 5 5 b . .
    c d d c d 5 5 b 5 5 5 5 5 5 b .
    c b d d c c b 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`)
anim.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 1 1 1 5 1 1 1 . .
    . . . . b 5 5 1 f 1 d 1 f 1 4 b
    . . . . b 5 5 1 1 1 4 1 1 1 b .
    . . . b d 5 5 5 5 4 4 4 4 b . .
    . . b d d 5 5 5 5 5 5 5 5 b . .
    . b d d d d 5 5 5 5 5 5 5 5 b .
    b d d d b b b 5 5 5 5 5 5 5 b .
    c d d b 5 5 d c 5 5 5 5 5 5 b .
    c b b d 5 d c d 5 5 5 5 5 5 b .
    . b 5 5 b c d d 5 5 5 5 5 d b .
    b b c c c d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`)
anim.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 1 1 1 5 1 1 1 . .
    . . . . b 5 5 1 f 1 d 1 f 1 4 b
    . . . . b 5 5 1 1 1 4 1 1 1 b .
    . . . b d 5 5 5 5 4 4 4 4 b . .
    . b b d d d 5 5 5 5 5 5 5 b . .
    b d d d b b b 5 5 5 5 5 5 5 b .
    c d d b 5 5 d c 5 5 5 5 5 5 b .
    c b b d 5 d c d 5 5 5 5 5 5 b .
    c b 5 5 b c d d 5 5 5 5 5 5 b .
    b b c c c d d d 5 5 5 5 5 d b .
    . . . . c c d d d 5 5 5 b b . .
    . . . . . . c c c c c b b . . .
`)
anim.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 1 1 1 5 1 1 1 . .
    . . . . b 5 5 1 f 1 5 1 f 1 . .
    . . . . b 5 5 1 1 1 d 1 1 1 . .
    . b b b d 5 5 5 5 5 4 4 4 4 4 b
    b d d d b b d 5 5 4 4 4 4 4 b .
    b b d 5 5 5 b 5 5 5 5 5 5 b . .
    c d c 5 5 5 5 d 5 5 5 5 5 5 b .
    c b d c d 5 5 b 5 5 5 5 5 5 b .
    . c d d c c b d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
    . . . . . . . . . . . . . . . .
`)
animation.attachAnimation(mySprite, anim)
game.onUpdateInterval(1500, function () {
    gap = Math.randomRange(0, 4)
    if (gap == 0) {
        topImage = img`
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . b e e e e e e e e e e b . . . . . .
            . . . . . . . b e e e e e e e e b . . . . . . .
            . . . . . . . . b e e e e e e b . . . . . . . .
        `
        bottomImage = img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . f f f f . . . . . . . . . .
            . . . . . . . . f f 4 4 4 4 f f . . . . . . . .
            . . . . . . . f 4 4 f f f f 4 4 f . . . . . . .
            . . . . . . f 4 f f 4 4 4 4 f f 4 f . . . . . .
            . . . . . f 4 f f 4 f f f f 4 f f 4 f . . . . .
            . . . . . f 4 f 4 f 4 4 4 4 f 4 f 4 f . . . . .
            . . . . . f 4 f f 4 f f f f 4 f f 4 f . . . . .
            . . . . . f f 4 f f 4 4 4 4 f f 4 f f . . . . .
            . . . . . e f f 4 4 f f f f 4 4 f f e . . . . .
            . . . . . e e f f f 4 4 4 4 f f f e e . . . . .
            . . . . . . e e e f f f f f f e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
        `
    } else if (gap == 1) {
        topImage = img`
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . .
            . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . .
            . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
        `
        bottomImage = img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
            . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . .
        `
    } else if (gap == 2) {
        topImage = img`
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
        `
        bottomImage = img`
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
            . . . . . f f f f f f f f f f f f f f . . . . .
        `
    } else {
        topImage = img`
            . . . . . 6 f e e e e e e e e e e e 6 . . . . .
            . . . . 6 7 7 e e e e e e e f e e e 7 6 . . . .
            . . . 6 7 7 7 e e e e e e e f e e e 7 7 6 . . .
            . . 6 7 7 6 8 e e e e e e e f e e e 7 7 7 6 . .
            . . . 6 6 8 e e e e e e e e f e e e 6 6 6 . . .
            . . . . . . e e e e f f f f f e e e e e . . . .
            . . . . . . e e e f e e e e f e e e f . . . . .
            . . . . . . e e e f e e e e f e e e f . . . . .
            . . . . . . e e e f e e e e f e e e f . . . . .
            . . . . . . e e e e f f f f f e e e f . . . . .
            . . . . . . e e e e e e e e e e e e f . . . . .
            . . . . . . e e e e e e e e e e e e f . . . . .
            . . . . . . e e e e e e f e e e e e e . . . . .
            . . . . . 6 e e e e e e e e e e e e 6 . . . . .
            . . . . 6 7 e e e e e e e e e e e e 7 6 . . . .
            . . . 6 7 7 e e e e e e f e e e e e 7 7 6 . . .
            . . 6 7 7 6 e e e e e e f e e e e e 7 7 7 6 . .
            . . . 6 6 8 e e e e e e f e e e e e 6 6 6 . . .
            . . . . . . e e e e e e f e e e e e e e . . . .
            . . . . . . e e e e e e e e e e e e f . . . . .
            . . . . . . e e e e e e e e e e e e f . . . . .
            . . . . . . e e e e e e e e e e e e f . . . . .
            . . . . . . e e e e e e e e e e e e f . . . . .
            . . . . . . e e e f f f f f e e e e f . . . . .
            . . . . . . e e e f e e e e e e e e f . . . . .
            . . . . . . e e e f e e e e e e e e e . . . . .
            . . . . . 6 e e e f e e e e e e e e 6 . . . . .
            . . . . 6 7 e e e f f f f e e e e e 7 6 . . . .
            . . . 6 7 7 e e e f e e e e e e e e 7 7 6 . . .
            . . 6 7 7 6 e e e f e e e e e e e e 7 7 7 6 . .
            . . . 6 6 8 e e e f f f f f e e e e 6 6 6 . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . 6 e e e e e e e e e e e e 6 . . . . .
            . . . . 6 7 7 e e e e e e e e e e e 7 6 . . . .
            . . . 6 7 7 6 e f f f f f f f e e e 7 7 6 . . .
            . . 6 7 7 6 e f e e f e e f e f e e 7 7 7 6 . .
            . . . 6 6 8 c f e e e e e e e f e e 6 6 6 . . .
            . . . . . . c f e f e e e f e f e e . . . . . .
            . . . . . . e f e e f f f e e f e e . . . . . .
            . . . . . . e f e e e e e e e f e e . . . . . .
            . . . . . . e e f f f f f f f e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . e e e e e e e e e e e e . . . . . .
            . . . . . . b e e e e e e e e e e b . . . . . .
            . . . . . . . b e e e e e e e e b . . . . . . .
            . . . . . . . . b e e e e e e b . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
        `
        bottomImage = img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . b b b b . . . . . . . . . .
            . . . . . . . . b b d d d d b b . . . . . . . .
            . . . . . . . b d d b b b b d d b . . . . . . .
            . . . . . . b d b b d d d d b b d b . . . . . .
            . . . . . b d b b d b b b b d b b d b . . . . .
            . . . . . b d b d b d d d d b d b d b . . . . .
            e e e e e e e e e e f f f e e e e e e e e e e e
            e e e e e e e e e f e e e f e e e e e e e e e e
            e e e e e e e e e f e e e f e e e e e e e e e e
            e e e e e e e e e f f f f e e e e e e e e e e e
            e e e e e e e e e f e e e e e e e e e e e e e e
            e e e e e e e e e f e e e e f e e e e e e e e e
            e e e e e e e e e f e e e e f e e e e e e e e e
            e e e e e e e e e e e e e e f e e e e e e e e e
            e e e e e e e e e e e e e e f e e e e e e e e e
            e e e e e e e e e e e e e e f f f e e f f f e e
            e e e e e e e e e e e e e e e e e e e f e e e e
            e e e e e e e e e e e e e e e e e e e f f f e e
            e e e e e e e e e e e e e e e e e e e e e f e e
            e e e e e e e e e e e e e e e e e e e f f f e e
            e e e e e e e e e e e e e e e e e e e e e e e e
            e e e e e e e e e e e e e e e e e e e e e e e e
            e e e e e e e e e e e e e e e e e e e e e e e e
        `
    }
    gapImage = image.create(2, scene.screenHeight())
    gapImage.fill(1)
    gapSprite = sprites.create(gapImage, SpriteKind.Gap)
    gapSprite.setFlag(SpriteFlag.AutoDestroy, true)
    gapSprite.setFlag(SpriteFlag.Invisible, true)
    gapSprite.left = scene.screenWidth()
    gapSprite.vx = -45
    projectile = sprites.createProjectileFromSide(topImage, -45, 0)
    projectile.top = 0
    projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
    projectile.bottom = scene.screenHeight()
})
game.onUpdate(function () {
    if (mySprite.vy > 0) {
        animation.setAction(mySprite, ActionKind.Idle)
    }
    if (mySprite.bottom > 120 || mySprite.top < 0) {
        game.over(false, effects.confetti)
    }
})
forever(function () {
    music.playMelody("C5 B A G F E D C ", 500)
})
