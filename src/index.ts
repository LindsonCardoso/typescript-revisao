/**--------------------------------------------------------**/
// inferencia x annotation
//inferencia:
let x = 12 //essa variavel sempre vai ser do tipo number
console.log(x)


//annotation
let y: number = 10; //o tipo é explicito e tambem essa variavel sempre vai ser do tipo number
console.log(y)


/**--------------------------------------------------------**/
//tipos basicos
let firsName: string = "lindson"
let age: number = 13
let isAdmin: boolean = true


/**--------------------------------------------------------**/
//object x Arrays
const myNumber: number[] = [1, 2, 4] // estrutura de objeto
const myObs: string[] = ['lindson', 'cardoso', 'barbosa']

//tuplas
let myTuple: [number, string, string[], boolean] // tem que sergui a tipagem adicionada em ordem
myTuple = [22, 'lindson', ["a", "b"], true]


//object literals -> {prop: value}
const user: {name: string, age: number} = {
  name: 'lindson',
  age: 12
}
console.log(user)

/**--------------------------------------------------------**/
//(nao sei que tipos de dados vou ter?)
//union types
let id: string | number = "10"

//type alias
type myIdTypes = Number | String
const userId: myIdTypes = 10


/**--------------------------------------------------------**/
//enum //enumerando varios tipos
enum Size {
  P = "Pequeno",
  M = "Medio",
  G = 'Grande'
}

const camisa = {
  name: "camisa gola v",
  size: Size.G
}


/**--------------------------------------------------------**/
//literal types [alterar um valor ja definido em uma variavel para outro]
let testes: "algumvalor"
teste = "algumvalor"
//muito utilizado como [null]
let testes: "algumvalor" | null
teste = null


/**--------------------------------------------------------**/
//functions
//tipando os argumentos de uma funcao
function sun(a: number, b: number) {
  return a + b
}

//tipando o retorno da funcao
function hello(name: string): string {
  return `hello ${name}`
}
console.log(hello("Wold"))

//tipando funcoes que nao retornam nada
function logger(msg: string): void{
  console.log(msg)
}
logger("teste")

//tipando funcao onde o argumento é opcional
function greeping(name: string, greet?: string) {
  if (greet) {
    console.log(`ola ${greet} ${name}`)
    return
  }
  console.log(`ola ${name}`)
}
greeping("Jose")
greeping("Jose", "Sir")
