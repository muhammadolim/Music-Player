import {v4 as uuidv4} from 'uuid'

function chillHop() {
    return [
        {
            name: "What If I Told You",
            artist: "Juan Rios",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/935da7886600df5eeb2d3b13b12cf27ee8c6c700-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=21649",
            color: ["#FFDD9B", "#F9AB85"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "The Field From Spirited Away",
            artist: "Sleepy Fish, coa",
            cover: "https://chillhop.com/wp-content/uploads/2022/05/1c9e8f008e40a1d5c496a85b2aaf8c96a14a3c88-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36919",
            color: ["#FEBF1E", "#B70002"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Safe Haven",
            artist: "Oatmello, Makzo",
            cover: "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=20123",
            color: ["#C9C53B", "#5487E3"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Places",
            artist: "Ruck P",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=20561",
            color: ["#EB787A", "#674D77"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Parasol",
            artist: "Plusma, Guillaume Muschalle",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/c46e7efae453e56f839e3683926e809639f167b0-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=28901",
            color: ["#488A9A", "#C28B75"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Contemplation",
            artist: "Toonorth",
            cover: "https://f4.bcbits.com/img/a2760964854_16.jpg",
            // audio: "https://t4.bcbits.com/stream/ee0b20e4e905f77a31f85db5fa2c9cc8/mp3-128/1376711599?p=0&ts=1659096462&t=6645137c201b7a04ece492108a24223a519ac815&token=1659096462_af7afab99beda1aa1d6876368e9c063c0359acf0",
            audio: "https://geo-samples.beatport.com/track/05512e1d-3167-4848-a368-b35a235cc77f.LOFI.mp3",
            color: ["#9795F8", "#3B4E6E"],
            id: uuidv4(),
            active: false,
        },
    ]
}

export default chillHop;