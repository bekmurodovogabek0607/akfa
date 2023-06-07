interface IRoom{
    name:string
    narxi:number
    kompani:string
    rangi:string
    turi:'metall'|'plasmass'
}
interface IShisha{
    name:string
    rangi:string
    narxi:number
}
interface IDeraza{
    style:string
    heigth:number
    witdh:number
    pallaWidth:number
    room:IRoom
    shisha:IShisha
    shishaQavat:'1x'|'2x'
    tor:'torli'|'torsiz'
    maxanizm:'bor'|'yoq'
    ochiladiganPalla:'1'|'2'
    ulushturi:"foiz"|"so'm"
    ustama:number
}