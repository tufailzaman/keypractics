// const one = () => {
//     setTimeout ( () => {
//     console.log("one")},5000)
// }
// const two = () => {
//     setTimeout( () => {
//         console.log("two")
//     },3000)
// }
// const three = () => {
//     console.log("three")
// }
// one();
// two();
// three();
// const one = (callback) => {
//     setTimeout ( () => {
//     console.log("one")
//     callback()
// },5000)
// }
// const two = (callback) => {
//     setTimeout( () => {
//         console.log("two")
//         callback()
//     },3000)
// }
// const three = (callback) => {
//     console.log("three")
//     callback()
// }
// ///////  Call Back Hell
// one (
//     () => {
//         two (
//             () => {
//                 three (
//                     () => {
//                         console.log("Done")
//                     }
//                 )
//             }
//         )
//     }
// )


const one = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("one")
            resolve();
        },3000)
    })
}

const two = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("two")
            resolve();
        },5000)
    })
}

const three = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("Three")
            resolve();
        },1000)
    })
}

// one().then(() => {
//     two().then(() => {
//         three().then(() => {
//             console.log("Done")
//         })
//     })
// })

async function run () {
    await one();
    await two();
    await three();
}
run();