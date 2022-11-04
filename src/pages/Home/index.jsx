export function Home(){
  return [
    <div className="h-screen bg-red-700 text-white flex flex-col items-center">
      
      <header className="p-4">
      <img src="/images/logo-fundo-vinho.svg" className="w-40"></img>
      </header>

      <div className="container p-6  flex-1 flex flex-col space-y-6 md:flex-row items-center md:space-y-0 md:space-x-6">
        
        <div className="md:flex-1">
          <img  className="w-full" src="/images/img.png"></img>
        </div>

        <div className="md:flex-1 flex flex-col space-y-6">
          <h1 className="text-3xl text-center font-bold md:text-left">Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>
          <a href="/signup" className="text-center text-red-700 bg-white text-xl px-5 py-3 rounded-xl">Criar minha conta</a>
          <a href="/Login" className="text-center text-white border border-white text-xl px-5 py-3 rounded-xl">Fazer login</a>
        </div>
      </div>
    </div>
  ]
}