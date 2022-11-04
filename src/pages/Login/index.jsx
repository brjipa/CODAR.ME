import { Icon } from './../../components'
import { Input } from '../../components'

export const Login = () => {
    return (
        <div>
            <header className="p-4 border-b border-red-300">
                <img src="/images/logo-fundo-branco.svg" className="w-32 md:w-40 container flex justify-center max-w-5xl"></img>
            </header>
        

        <main className="container p-4 max-w-xl">
            <div className="p-4 flex space-x-4 items-center text-red-700">
                <a href='/'>
                    <Icon className="h-6" name="arrowLeft"/>
                </a>
                <h2 className="text-xl font-bold ">Entre na sua conta</h2>
            </div>

            <form className="p-4 space-y-6">
                <Input
                    type="text"
                    name="email"
                    label="Seu e-mail"
                    placeholder="Digite seu e-mail"
                />

                <Input
                    type="password"
                    name="password"
                    label="Sua senha"
                    placeholder="Digite sua senha"
                />

                <button className="w-full text-center text-white text-xl px-6 py-3 rounded-xl bg-red-500">Fazer Login</button>
            </form>
        </main>
        </div>
    )
}